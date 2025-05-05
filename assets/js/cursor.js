var cursor = {
  delay: 16,
  _x: 0,
  _y: 0,
  endX: window.innerWidth / 2,
  endY: window.innerHeight / 2,
  cursorVisible: true,
  cursorEnlarged: false,
  $dot: document.querySelector(".cursor-dot"),
  $outline: document.querySelector(".cursor-dot-outline"),
  lastScrolledLeft : 0, // For changing position of cursor with scrolling
  lastScrolledTop : 0,  // For changing position of cursor with scrolling

  init: function () {
    // Set up element sizes
    this.dotSize = this.$dot.offsetWidth;
    this.outlineSize = this.$outline.offsetWidth;

    this.setupEventListeners();
    this.animateDotOutline();
  },

  setupEventListeners: function () {
    var self = this;
  
    // Anchor hovering
    document.querySelectorAll("a").forEach(function (el) {
      el.addEventListener("mouseover", function () {
        self.cursorEnlarged = true;
        self.toggleCursorSize();
      });
      el.addEventListener("mouseout", function () {
        self.cursorEnlarged = false;
        self.toggleCursorSize();
      });
    });
  
    // Click events
    document.addEventListener("mousedown", function (e) {
      self.cursorEnlarged = true;
      self.toggleCursorSize();
      self.createClickParticles(e.pageX, e.pageY); // 💥
    });
    document.addEventListener("mouseup", function () {
      self.cursorEnlarged = false;
      self.toggleCursorSize();
    });
  
    document.addEventListener("mousemove", function (e) {
      self.cursorVisible = true;
      self.toggleCursorVisibility();
  
      self.endX = e.pageX;
      self.endY = e.pageY;
      self.$dot.style.top = self.endY + "px";
      self.$dot.style.left = self.endX + "px";
    });
  
    document.addEventListener("mouseenter", function () {
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      self.$dot.style.opacity = 1;
    });
  
    document.addEventListener("mouseleave", function () {
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      self.$dot.style.opacity = 0;
    });
  
    document.addEventListener('scroll', function () {
      if (self.lastScrolledLeft != $(document).scrollLeft()) {
        self.endX -= self.lastScrolledLeft;
        self.lastScrolledLeft = $(document).scrollLeft();
        self.endX += self.lastScrolledLeft;
      }
      if (self.lastScrolledTop != $(document).scrollTop()) {
        self.endY -= self.lastScrolledTop;
        self.lastScrolledTop = $(document).scrollTop();
        self.endY += self.lastScrolledTop;
      }
      self.$dot.style.top = self.endY + "px";
      self.$dot.style.left = self.endX + "px";
    });
  },

  createClickParticles: function (x, y) {
    const numParticles = 12;
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement("div");
      particle.className = "cursor-particle";
      document.body.appendChild(particle);
  
      const angle = (Math.PI * 2 * i) / numParticles;
      const radius = 40 + Math.random() * 20;
      const destX = x + radius * Math.cos(angle);
      const destY = y + radius * Math.sin(angle);
  
      particle.style.left = x + "px";
      particle.style.top = y + "px";
  
      requestAnimationFrame(() => {
        particle.style.transform = `translate(${destX - x}px, ${destY - y}px) scale(0)`;
        particle.style.opacity = "0";
      });
  
      setTimeout(() => {
        particle.remove();
      }, 500);
    }
  },
  
  

  animateDotOutline: function () {
    var self = this;

    self._x += (self.endX - self._x) / self.delay;
    self._y += (self.endY - self._y) / self.delay;
    self.$outline.style.top = self._y + "px";
    self.$outline.style.left = self._x + "px";

    requestAnimationFrame(this.animateDotOutline.bind(self));
  },

  toggleCursorSize: function () {
    var self = this;

    if (self.cursorEnlarged) {
      self.$dot.style.transform = "translate(-50%, -50%) scale(0.75)";
      self.$outline.style.transform = "translate(-50%, -50%) scale(1.5)";
    } else {
      self.$dot.style.transform = "translate(-50%, -50%) scale(1)";
      self.$outline.style.transform = "translate(-50%, -50%) scale(1)";
    }
  },

  toggleCursorVisibility: function () {
    var self = this;

    if (self.cursorVisible) {
      self.$dot.style.opacity = 1;
      self.$outline.style.opacity = 1;
    } else {
      self.$dot.style.opacity = 0;
      self.$outline.style.opacity = 0;
    }
  },
};

cursor.init();
