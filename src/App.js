import React from 'react';
import Spinner from './components/Spinner/Spinner';
import Avatar from './components/Avatar/Avatar';
import TagCloud from './components/TagCloud/TagCloud';
import MasonryGallery from './components/MasonryGallery/MasonryGallery';
import CutOutText from './components/CutOutText/CutOutText';
import Display from './pageComponents/display/Display';
import reImg from './assets/re.png'
import './App.css';

function App() {  

  const examples = {
    tagList: [
      { name: "C#", background: "#95478e", color: "#fff", },
      { name: "UI/UX Design", background: "#000", color: "#fff", },
      { name: ".NET", background: "#6a4097", color: "#fff", },
      { name: "Ableton", background: "#646464", color: "#fff", },
      { name: "SQL", background: "#b11b1b", color: "#fff", },
      { name: "Raspberry Pi", background: "#b61040", color: "#fff", },
      { name: "JS", background: "#e9d44d", color: "#000", },
      { name: "NodeJS", background: "#b11b1b", color: "#fff", },
      { name: "Mongo", background: "#479839", color: "#fff", },
      { name: "PHP", background: "#858eb8", color: "#fff", },
      { name: "Git", background: "#000", color: "#fff", },
      { name: "Autocad", background: "#ab2929", color: "#fff", },
    ],
    gallery: [
      { url: "https://picsum.photos/id/165/100/50" },
      { url: "https://picsum.photos/id/258/300/100" },
      { url: "https://picsum.photos/id/334/180/300" },
      { url: "https://picsum.photos/id/41/300/200" },
      { url: "https://picsum.photos/id/59/200/200" },
      { url: "https://picsum.photos/id/16/140/90" },
      { url: "https://picsum.photos/id/79/400/200" },
      { url: "https://picsum.photos/id/387/500/500" },
      { url: "https://picsum.photos/id/293/200/400" },
      { url: "https://picsum.photos/id/170/120/160" },
      { url: "https://picsum.photos/id/16/140/90" },
      { url: "https://picsum.photos/id/79/400/200" },
      { url: "https://picsum.photos/id/387/500/500" },
      { url: "https://picsum.photos/id/293/200/400" },
      { url: "https://picsum.photos/id/170/120/160" },
    ]

  }

  return (
    <main>
      <div className="container py-4">
        <header className="pb-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
            <img src={reImg} alt="ReactElements by @AndreaEmme"></img>
          </a>
          <p className="" style={{ color: "#C64B20" }}>React custom components library by @AndreaEmme</p>
        </header>

        <h1 className="my-4 fw-lighter">Documentation</h1>

        <div className="row align-items-md-stretch">
          <Display size="6" title="Spinner" listItems={["Size (px)", "Color", "Thickness (px)"]}>
            <Spinner></Spinner>            
          </Display>

          <Display size="6" title="Avatar" listItems={["Size (px)", "Img (url)"]}>
            <Avatar size="100"></Avatar>            
          </Display>

          <Display size="6" title="Tag cloud" listItems={["List (object)", "UniformColor (boolean)", "Background", "Color", "Height (none, 'sm')"]}>
            <TagCloud items={examples.tagList}></TagCloud>            
          </Display>

          <Display size="6" title="Tag cloud (uniform color and small)" listItems={["List (object)", "UniformColor (boolean)", "Background", "Color", "Height (none, 'sm')"]}>
            <TagCloud items={examples.tagList} uniformColor background="#7fcecb" color="#333" height="sm"></TagCloud>            
          </Display>

          <Display size="12" title="Masonry gallery with Lightbox" listItems={["Gallery (object)"]}>
            <MasonryGallery gallery={examples.gallery}></MasonryGallery>
          </Display>

          <Display size="12" title="Cut Out Text" listItems={["Text", "Height (px)", "Color", "Background (url)"]}>
            <CutOutText text="BLUE SKY" height="500" color="#eaeaea" background="https://picsum.photos/id/806/1920/1080"></CutOutText>            
          </Display>
        </div>

        <footer className="pt-3 mt-4 text-muted border-top">
          &copy; 2021
        </footer>
      </div>
    </main >

  );
}

export default App;
