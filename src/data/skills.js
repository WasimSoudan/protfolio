// Dynamically import all images from the skills folder
const images = import.meta.glob('../../assets/skills/*', { eager: true, import: 'default' });

const skills = [
  { title: "HTML", imageSrc: "skills/html.png" },
  { title: "CSS", imageSrc: "skills/css.png" },
  { title: "React", imageSrc: "skills/react.png" },
  { title: "Vue", imageSrc: "skills/vue.png" },
  { title: "Tailwind", imageSrc: "skills/tailwind.png" },
  { title: "Bootstrap", imageSrc: "skills/bootstrap.png" },
  { title: "Node", imageSrc: "skills/node.png" },
  { title: "MongoDB", imageSrc: "skills/mongodb.png" },
  { title: "Postgresql", imageSrc: "skills/postgresql.png" },
];

// Attach actual image imports to each skill item
skills.forEach(item => {
  item.image = images[`../../assets/${item.imageSrc}`];
});

export default skills;
