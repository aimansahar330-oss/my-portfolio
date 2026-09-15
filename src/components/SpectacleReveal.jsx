import { useEffect, useRef, useState } from "react";

const SpectacleReveal = ({
  children,
  delay = 0,
  className = "",
}) => {
  const sectionRef = useRef(null);

  const lastScrollY = useRef(
    typeof window !== "undefined" ? window.scrollY : 0
  );

  const scrollDirection = useRef("down");

  const [visible, setVisible] = useState(false);
  const [enterFrom, setEnterFrom] = useState("bottom");

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    /* Detect scroll direction */
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current) {
        scrollDirection.current = "down";
      } else if (currentY < lastScrollY.current) {
        scrollDirection.current = "up";
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    /* Fallback */
    if (!("IntersectionObserver" in window)) {
      setVisible(true);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          /*
            DOWN scroll:
            content bottom se enter karega

            UP scroll:
            content top se enter karega
          */

          if (scrollDirection.current === "up") {
            setEnterFrom("top");
          } else {
            setEnterFrom("bottom");
          }

          setVisible(true);
        } else {
          /*
            Section trigger zone se completely
            nikal jaye to reset kar do.
          */
          setVisible(false);
        }
      },
      {
        /*
          IMPORTANT:

          top -18%
          bottom -35%

          Yani observer sirf viewport ke
          beech wale area mein trigger karega.

          Section ki sirf edge dikhne se
          animation start nahi hogi.
        */
        rootMargin: "-18% 0px -35% 0px",

        threshold: 0,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        "--reveal-delay": `${delay}ms`,
      }}
      className={`
        smart-reveal
        ${
          enterFrom === "top"
            ? "smart-reveal-from-top"
            : "smart-reveal-from-bottom"
        }
        ${visible ? "smart-reveal-show" : ""}
        ${className}
      `}
    >
      <div className="smart-reveal-content">
        {children}
      </div>
    </div>
  );
};

export default SpectacleReveal;