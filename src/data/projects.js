const images = import.meta.glob('../../assets/projects/*', { eager: true, import: 'default' });

const projects = 
[
  {
    "title": "Bilad Alcham",
    "imageSrc": "projects/project.png",
    "description": "This is a project for displaying articles, studies, and books for sale, with a dashboard for sharing research.",
    "skills": ["React", "Bootstrap", "Express", "Node"],
    "demo": "https://www.biladalcham.com/",
    "source": "https://github.com/WasimSoudan/mujtahed_FrontEnd"
  }
]// Attach actual image imports to each skill item
projects.forEach(item => {
  item.image = images[`../../assets/${item.imageSrc}`];
});


export default projects