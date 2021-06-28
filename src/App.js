import React from 'react';
import { useState } from 'react';
import Spinner from './components/Spinner/Spinner';
import Avatar from './components/Avatar/Avatar';
import TagCloud from './components/TagCloud/TagCloud';
import MasonryGallery from './components/MasonryGallery/MasonryGallery';
import CustomProperties from './pageComponents/customProperties/CustomProperties';
import reImg from './assets/re.png'
import './App.css';

function App() {

  const [viewCode, setViewCode] = useState({
    spinner: false,
    avatar: false,
    tagCloud: false,
    masonryGallery: false
  })

  const viewCodeHandler = (setting) => {
    setViewCode(setting)
  }

  const examples = {
    tagList: [
      {name: "C#", background: "#95478e", color: "#fff",},      
      {name: "UI/UX Design", background: "#000", color: "#fff",},
      {name: ".NET", background: "#6a4097", color: "#fff",},
      {name: "Ableton", background: "#646464", color: "#fff",},
      {name: "SQL", background: "#b11b1b", color: "#fff",},
      {name: "Raspberry Pi", background: "#b61040", color: "#fff",},      
      {name: "JS", background: "#e9d44d", color: "#000",},
      {name: "NodeJS", background: "#b11b1b", color: "#fff",},
      {name: "Mongo", background: "#479839", color: "#fff",},
      {name: "PHP", background: "#858eb8", color: "#fff",},
      {name: "Git", background: "#000", color: "#fff",},
      {name: "Autocad", background: "#ab2929", color: "#fff",},
    ],
    gallery:[
      {url:"https://picsum.photos/id/165/100/50"},
      {url:"https://picsum.photos/id/258/300/100"},
      {url:"https://picsum.photos/id/334/180/300"},
      {url:"https://picsum.photos/id/41/300/200"},
      {url:"https://picsum.photos/id/59/200/200"},
      {url:"https://picsum.photos/id/16/140/90"},
      {url:"https://picsum.photos/id/79/400/200"},
      {url:"https://picsum.photos/id/387/500/500"},
      {url:"https://picsum.photos/id/293/200/400"},
      {url:"https://picsum.photos/id/170/120/160"},

      {url:"https://picsum.photos/id/16/140/90"},
      {url:"https://picsum.photos/id/79/400/200"},
      {url:"https://picsum.photos/id/387/500/500"},
      {url:"https://picsum.photos/id/293/200/400"},
      {url:"https://picsum.photos/id/170/120/160"},
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
          <div className="col-md-6 mb-4">
            <div className="h-100 p-4 bg-light border rounded-3">
              <h4>Spinner</h4>
              <Spinner></Spinner>
              <CustomProperties viewHandler={() => viewCodeHandler({ ...viewCode, spinner: !viewCode.spinner })} show={viewCode.spinner} listItems={["Size", "Color", "Thickness"]}></CustomProperties>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="h-100 p-4 bg-light border rounded-3">
              <h4>Avatar</h4>
              <Avatar size="100"></Avatar>
              <CustomProperties viewHandler={() => viewCodeHandler({ ...viewCode, avatar: !viewCode.avatar })} show={viewCode.avatar} listItems={["Size", "Img"]}></CustomProperties>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="h-100 p-4 bg-light border rounded-3">
              <h4>Tag cloud</h4>
              <TagCloud items={examples.tagList}></TagCloud>
              <CustomProperties viewHandler={() => viewCodeHandler({ ...viewCode, tagCloud: !viewCode.tagCloud })} show={viewCode.tagCloud} listItems={["List", "UniformColor", "Background", "Color"]}></CustomProperties>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="h-100 p-4 bg-light border rounded-3">
              <h4>Tag cloud (uniform color)</h4>
              <TagCloud items={examples.tagList} uniformColor background="#fff" color="#666"></TagCloud>
              <CustomProperties viewHandler={() => viewCodeHandler({ ...viewCode, tagCloud: !viewCode.tagCloud })} show={viewCode.tagCloud} listItems={["List", "UniformColor", "Background", "Color"]}></CustomProperties>
            </div>
          </div>
          <div className="col-md-12 mb-4">
            <div className="h-100 p-4 bg-light border rounded-3">
              <h4>Masonry gallery with Lightbox</h4>
              <MasonryGallery gallery={examples.gallery}></MasonryGallery>
              <CustomProperties viewHandler={() => viewCodeHandler({ ...viewCode, masonryGallery: !viewCode.masonryGallery })} show={viewCode.masonryGallery} listItems={["Gallery"]}></CustomProperties>
            </div>
          </div>
        </div>

        <footer className="pt-3 mt-4 text-muted border-top">
          &copy; 2021
        </footer>
      </div>
    </main>

  );
}

export default App;
