AOS.init({
  duration:900,
  easing:'ease-out-cubic',
  once:true,
  offset:120
});

/* NAV SCROLL */
window.addEventListener('scroll',()=>{
  document.getElementById('nav')
    ?.classList.toggle('scrolled',window.scrollY>100);
});

/* REVEAL SECTIONS */
document.querySelectorAll('.reveal').forEach(sec=>{
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add('active');
    });
  },{threshold:.2});
  obs.observe(sec);
});

/* CARD STAGGER */
document.querySelectorAll('.card').forEach((card,i)=>{
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        setTimeout(()=>card.classList.add('visible'),i*120);
      }
    });
  },{threshold:.3});
  obs.observe(card);
});

/* HOME SLIDER (only if exists) */
/* HOME SLIDER (FIXED) */
const slideImg = document.getElementById("slideImage");

if(slideImg){

  const slides = [
    {
      image:"assets/hero/living.jpg",
      category:"LIVING ROOM",
      heading:"Living Room Interiors",
      desc:"Warm textures and elegant finishes<br>crafted for modern living spaces."
    },
    {
      image:"assets/hero/kitchen.jpg",
      category:"KITCHEN",
      heading:"Kitchen Interiors",
      desc:"Durable, stylish surfaces<br>designed for everyday performance."
    },
    {
      image:"assets/hero/bedroom.jpg",
      category:"BEDROOM",
      heading:"Bedroom Interiors",
      desc:"Calm tones and premium finishes<br>crafted for restful living."
    },
    {
      image:"assets/hero/office.jpg",
      category:"OFFICE",
      heading:"Office Interiors",
      desc:"Professional designs that balance<br>productivity and aesthetics."
    }
  ];

  let index = 0;

  const cat = document.getElementById("slideCategory");
  const head = document.getElementById("slideHeading");
  const desc = document.getElementById("slideDesc");

  setInterval(() => {

    slideImg.classList.remove("active");

    setTimeout(() => {
      index = (index + 1) % slides.length;
      slideImg.src = slides[index].image;
      slideImg.classList.add("active");

      /* Update text ONLY on desktop */
      if(window.innerWidth > 900){
        cat.textContent = slides[index].category;
        head.textContent = slides[index].heading;
        desc.innerHTML = slides[index].desc;
      }

    }, 500);

  }, 5000);
}


/* KEBAB MENU TOGGLE */
const kebab = document.getElementById("kebab");
const navLinks = document.querySelector(".nav-links");

kebab.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

/* Close menu on link click */
document.querySelectorAll(".nav-links a").forEach(link=>{
  link.addEventListener("click",()=>{
    navLinks.classList.remove("open");
  });
});
document.addEventListener("click", (e)=>{
  if(!navLinks.contains(e.target) && !kebab.contains(e.target)){
    navLinks.classList.remove("open");
  }
});

/* ================= GALLERY DATA ================= */
const galleryData = [
  { src: "assets/gallery/livingroom/l1.jpg", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l2.jpg", category: "living", alt: "living room Design" },
  { src: "assets/gallery/livingroom/l3.jpg", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l4.jpg", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l5.jpg", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l6.jpg", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l7.jpg", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l8.jpg", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l9.jpg", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l10.jpg", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l11.jpg", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l12.jpg", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l13.jpg", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l14.jpg", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l15.jpeg", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l16.jpg", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l17.jpg", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l18.jpeg", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/livingroom/l19.jpg", category: "living", alt: "living room Interior" },
  { src: "assets/gallery/office/o1.jpeg", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o2.jpeg", category: "office", alt: "Corporate Office" },
  { src: "assets/gallery/office/o3.jpg", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o4.jpeg", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o5.jpeg", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o6.jpeg", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o7.jpeg", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o8.jpeg", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o9.jpeg", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o10.jpg", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o11.jpg", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o12.jpeg", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o13.jpg", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o14.jpg", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o15.jpg", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o16.jpg", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o17.jpg", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/office/o18.jpg", category: "office", alt: "Office Interior" },
  { src: "assets/gallery/bedroom/bd1.jpg", category: "bedroom", alt: "Bedroom Interior" },
  { src: "assets/gallery/bedroom/bd2.jpg", category: "bedroom", alt: "Bedroom Interior" },
  { src: "assets/gallery/bedroom/bd3.jpg", category: "bedroom", alt: "Bedroom Interior" },
  { src: "assets/gallery/bedroom/bd4.jpg", category: "bedroom", alt: "Bedroom Interior" },
  { src: "assets/gallery/bedroom/bd5.jpg", category: "bedroom", alt: "Bedroom Interior" },
  { src: "assets/gallery/bedroom/bd6.jpeg", category: "bedroom", alt: "Bedroom Interior" },
  { src: "assets/gallery/bedroom/bd7.jpeg", category: "bedroom", alt: "Bedroom Interior" },
  { src: "assets/gallery/kichen/k1.jpg", category: "kitchen", alt: "Kitchen Interior" },
  { src: "assets/gallery/kichen/k2.jpg", category: "kitchen", alt: "Kitchen Interior" },
  { src: "assets/gallery/kichen/k3.jpg", category: "kitchen", alt: "Kitchen Interior" },
  { src: "assets/gallery/kichen/k4.jpg", category: "kitchen", alt: "Kitchen Interior" },
  { src: "assets/gallery/kichen/k5.jpg", category: "kitchen", alt: "Kitchen Interior" },
  { src: "assets/gallery/kichen/k6.jpg", category: "kitchen", alt: "Kitchen Interior" },
  { src: "assets/gallery/kichen/k7.jpg", category: "kitchen", alt: "Kitchen Interior" },
  { src: "assets/gallery/kichen/k8.jpg", category: "kitchen", alt: "Kitchen Interior" },
  { src: "assets/gallery/kichen/k9.jpg", category: "kitchen", alt: "Kitchen Interior" },
  { src: "assets/gallery/kichen/k10.jpg", category: "kitchen", alt: "Kitchen Interior" },
  { src: "assets/gallery/poojaroom/pr1.jpeg", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr2.jpeg", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr3.jpeg", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr4.jpeg", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr5.jpeg", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr6.jpeg", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr7.jpeg", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr8.jpeg", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr9.jpeg", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr10.jpeg", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr11.jpeg", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr12.jpeg", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr13.jpeg", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr14.jpeg", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr15.jpeg", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr16.jpeg", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr17.jpeg", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr18.jpeg", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr19.jpeg", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr20.jpeg", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr21.jpeg", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr22.jpeg", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr23.jpeg", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/poojaroom/pr24.jpeg", category: "Pooja Room", alt: "Pooja Room" },
  { src: "assets/gallery/bathroom/b1.jpg", category: "Bath Room", alt: "Bath Room" },
  { src: "assets/gallery/bathroom/b2.jpg", category: "Bath Room", alt: "Bath Room" },
  { src: "assets/gallery/bathroom/b3.jpg", category: "Bath Room", alt: "Bath Room" },
  { src: "assets/gallery/bathroom/b4.jpg", category: "Bath Room", alt: "Bath Room" },
  { src: "assets/gallery/bathroom/b5.jpg", category: "Bath Room", alt: "Bath Room" },
  { src: "assets/gallery/bathroom/b6.jpg", category: "Bath Room", alt: "Bath Room" },
  { src: "assets/gallery/bathroom/b7.jpg", category: "Bath Room", alt: "Bath Room" },
  { src: "assets/gallery/bathroom/b8.jpg", category: "Bath Room", alt: "Bath Room" },
  { src: "assets/gallery/bathroom/b9.jpg", category: "Bath Room", alt: "Bath Room" },
  { src: "assets/gallery/bathroom/b10.jpg", category: "Bath Room", alt: "Bath Room" },
  { src: "assets/gallery/bathroom/b11.jpg", category: "Bath Room", alt: "Bath Room" },
  { src: "assets/gallery/bathroom/b12.jpg", category: "Bath Room", alt: "Bath Room" },
  { src: "assets/gallery/bathroom/b13.jpg", category: "Bath Room", alt: "Bath Room" },
  { src: "assets/gallery/artisticlaminates/al1.jpg", category: "Artistic Laminates", alt: "Artistic Laminates" },
  { src: "assets/gallery/artisticlaminates/al2.jpeg", category: "Artistic Laminates", alt: "Artistic Laminates" },
  { src: "assets/gallery/artisticlaminates/al3.jpg", category: "Artistic Laminates", alt: "Artistic Laminates" },
  { src: "assets/gallery/designerfurniture/df1.jpg", category: "Designer Furniture", alt: "Designer Furniture" },
  { src: "assets/gallery/designerfurniture/df2.jpg", category: "Designer Furniture", alt: "Designer Furniture" },
  { src: "assets/gallery/designerfurniture/df3.jpg", category: "Designer Furniture", alt: "Designer Furniture" },
  { src: "assets/gallery/designerfurniture/df4.jpg", category: "Designer Furniture", alt: "Designer Furniture" },
  { src: "assets/gallery/designerfurniture/df5.jpg", category: "Designer Furniture", alt: "Designer Furniture" },
  { src: "assets/gallery/dining/d1.jpg", category: "Dinin", alt: "Dining" },
  { src: "assets/gallery/dining/d2.jpg", category: "Dinin", alt: "Dining" },
  { src: "assets/gallery/dining/d3.jpg", category: "Dinin", alt: "Dining" },
  { src: "assets/gallery/dining/d4.jpg", category: "Dinin", alt: "Dining" },
  { src: "assets/gallery/dining/d5.jpg", category: "Dinin", alt: "Dining" },
  { src: "assets/gallery/dining/d6.jpg", category: "Dinin", alt: "Dining" },
  { src: "assets/gallery/dining/d7.jpg", category: "Dinin", alt: "Dining" },
  { src: "assets/gallery/interialdesign/id1.jpeg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id2.jpg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id3.jpeg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id4.jpeg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id5.jpeg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id6.jpg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id7.jpg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id8.jpg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id9.jpg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id10.jpg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id11.jpg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id12.jpg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id13.jpg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id14.jpg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id15.jpg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id16.jpg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id17.jpg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id18.jpg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id19.jpg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id20.jpg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id21.jpg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id22.jpg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id23.jpg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id24.jpg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id25.jpg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id26.jpg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id27.jpg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id28.jpeg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interialdesign/id29.jpg", category: "Interial Design", alt: "Interial Design" },
  { src: "assets/gallery/interiorsfurnishings/if1.jpg", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if2.jpg", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if3.jpg", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if4.jpg", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if5.jpg", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if6.jpg", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if7.jpg", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if8.jpg", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if9.jpg", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if10.jpg", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if11.jpg", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if12.jpg", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if13.jpg", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if14.jpg", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if15.jpg", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if16.jpg", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if17.jpg", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if18.jpg", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if19.jpg", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if20.jpg", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if21.jpg", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if22.jpg", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/interiorsfurnishings/if23.jpg", category: "Interiors Furnishing", alt: "Interiors Furnishing" },
  { src: "assets/gallery/kidsroom/kd1.jpg", category: "Kids Room", alt: "Kids Room" },
  { src: "assets/gallery/kidsroom/kd2.jpg", category: "Kids Room", alt: "Kids Room" },
  { src: "assets/gallery/kidsroom/kd3.jpg", category: "Kids Room", alt: "Kids Room" },
  { src: "assets/gallery/kidsroom/kd4.jpg", category: "Kids Room", alt: "Kids Room" },
  { src: "assets/gallery/kidsroom/kd5.jpg", category: "Kids Room", alt: "Kids Room" },
  { src: "assets/gallery/kidsroom/kd6.jpg", category: "Kids Room", alt: "Kids Room" },
  { src: "assets/gallery/studyroom/s1.jpeg", category: "Study Room", alt: "Study Room" },
  { src: "assets/gallery/studyroom/s2.jpeg", category: "Study Room", alt: "Study Room" },
  { src: "assets/gallery/studyroom/s3.jpeg", category: "Study Room", alt: "Study Room" },
  { src: "assets/gallery/studyroom/s4.jpeg", category: "Study Room", alt: "Study Room" },
  { src: "assets/gallery/studyroom/s5.jpeg", category: "Study Room", alt: "Study Room" },
  { src: "assets/gallery/studyroom/s6.jpeg", category: "Study Room", alt: "Study Room" },
  { src: "assets/gallery/studyroom/s7.jpg", category: "Study Room", alt: "Study Room" },
  { src: "assets/gallery/studyroom/s8.jpeg", category: "Study Room", alt: "Study Room" },
  { src: "assets/gallery/studyroom/s9.jpg", category: "Study Room", alt: "Study Room" },
  { src: "assets/gallery/studyroom/s10.jpg", category: "Study Room", alt: "Study Room" },
  { src: "assets/gallery/studyroom/s11.jpg", category: "Study Room", alt: "Study Room" },
  { src: "assets/gallery/studyroom/s12.jpg", category: "Study Room", alt: "Study Room" },
  { src: "assets/gallery/studyroom/s13.jpg", category: "Study Room", alt: "Study Room" },
  { src: "assets/gallery/studyroom/s14.jpg", category: "Study Room", alt: "Study Room" },
  { src: "assets/gallery/wardrobe/w1.jpg", category: "Wardrobe", alt: "Wardrobe" },
  { src: "assets/gallery/wardrobe/w2.jpg", category: "Wardrobe", alt: "Wardrobe" },
  { src: "assets/gallery/wardrobe/w3.jpg", category: "Wardrobe", alt: "Wardrobe" },
  { src: "assets/gallery/wardrobe/w4.jpeg", category: "Wardrobe", alt: "Wardrobe" },
  { src: "assets/gallery/wardrobe/w5.jpeg", category: "Wardrobe", alt: "Wardrobe" },
  { src: "assets/gallery/wardrobe/w6.jpeg", category: "Wardrobe", alt: "Wardrobe" },
  { src: "assets/gallery/wooddoors/door1.jpeg", category: "Doors", alt: "Doors" },
  { src: "assets/gallery/wooddoors/door2.jpeg", category: "Doors", alt: "Doors" },
  { src: "assets/gallery/wooddoors/door3.jpeg", category: "Doors", alt: "Doors" },
  { src: "assets/gallery/wooddoors/door4.jpeg", category: "Doors", alt: "Doors" },
  { src: "assets/gallery/wooddoors/door5.jpeg", category: "Doors", alt: "Doors" },
  { src: "assets/gallery/wooddoors/door6.jpeg", category: "Doors", alt: "Doors" },
];

/* ================= RENDER GALLERY ================= */
const galleryGrid = document.getElementById("galleryGrid");

if (galleryGrid) {
    galleryGrid.innerHTML = galleryData
      .map(item => `
        <div class="gallery-item" data-category="${item.category}">
          <img
            class="gallery-img lazy-img"
            data-src="${item.src}"
            alt="${item.alt}"
            loading="lazy"
          >
        </div>
      `)
      .join("");
}
/* ================= LAZY IMAGE LOADER ================= */
const lazyImages = document.querySelectorAll(".lazy-img");

const imageObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  },
  {
    rootMargin: "200px", // preload before visible
    threshold: 0.1
  }
);

lazyImages.forEach(img => imageObserver.observe(img));


/* GALLERY FILTER */
const filterButtons = document.querySelectorAll(".gallery-filters button");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    filterButtons.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    galleryItems.forEach(item=>{
      if(filter === "all" || item.dataset.category === filter){
        item.classList.remove("hide");
      }else{
        item.classList.add("hide");
      }
    });
  });
});
/* ================= GALLERY LIGHTBOX ================= */
const lightbox = document.getElementById("lightbox");

if(lightbox){
  const lightboxImg = document.getElementById("lightbox-img");
  const galleryImages = document.querySelectorAll(".gallery-img");
  let currentIndex = 0;

  function openLightbox(index){
    currentIndex = index;
    lightboxImg.src = galleryImages[currentIndex].src;
    lightbox.classList.add("active");
  }

  galleryImages.forEach((img, index)=>{
    img.addEventListener("click", ()=>{
      openLightbox(index);
    });
  });

  document.querySelector(".lightbox-close").addEventListener("click", ()=>{
    lightbox.classList.remove("active");
  });

  lightbox.addEventListener("click",(e)=>{
    if(e.target === lightbox){
      lightbox.classList.remove("active");
    }
  });

  document.querySelector(".lightbox-arrow.right").addEventListener("click", ()=>{
    currentIndex = (currentIndex + 1) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex].src;
  });

  document.querySelector(".lightbox-arrow.left").addEventListener("click", ()=>{
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImg.src = galleryImages[currentIndex].src;
  });

  document.addEventListener("keydown",(e)=>{
    if(e.key === "Escape"){
      lightbox.classList.remove("active");
    }
  });
}