import React from 'react';
import Spinner from './components/Spinner/Spinner';
import Avatar from './components/Avatar/Avatar';
import TagCloud from './components/TagCloud/TagCloud';
import MasonryGallery from './components/MasonryGallery/MasonryGallery';
import CutOutText from './components/CutOutText/CutOutText';
import NotFound from './components/NotFound/NotFound';
import Chat from './components/Chat/Chat';

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
    ],
    chat: [
      { sender: "John Doe", text: "Hi Jane! I'm John!", time: "11:27", senderType: "S" },
      { sender: "Jane Doe", text: "Hi John!", time: "11:29", senderType: "R" },
      { sender: "Jane Doe", text: "How are you? Fine?", time: "11:29", senderType: "R" },
      { sender: "John Doe", text: "Fine thanks!", time: "11:31", senderType: "S" },
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
          <Display size="6" title="Chat" listItems={["messages (object)"]}>
            <Chat messages={examples.chat}></Chat>
          </Display>

          <Display size="3" title="Tag cloud" listItems={["list (object)", "uniformColor (boolean)", "background", "color", "height (none, 'sm')"]}>
            <TagCloud items={examples.tagList}></TagCloud>
          </Display>

          <Display size="3" title="Tag cloud (uniform color and small)" listItems={["list (object)", "uniformColor (boolean)", "background", "color", "height (none, 'sm')"]}>
            <TagCloud items={examples.tagList} uniformColor background="#7fcecb" color="#333" height="sm"></TagCloud>
          </Display>

          <Display size="6" title="Spinner" listItems={["size (px)", "color", "thickness (px)"]}>
            <Spinner></Spinner>
          </Display>

          <Display size="6" title="Avatar" listItems={["size (px)", "img (url)"]}>
            <Avatar size="100"></Avatar>
          </Display>

          <Display size="12" title="Not found" listItems={["theme ('light', 'dark')", "background", "message", "buttonText"]}>
            <NotFound theme="light" background="#fff" message="Non ho trovato niente nella pagina che hai richiesto!" buttonText="Indietro"></NotFound>
          </Display>

          <Display size="12" title="Masonry gallery with Lightbox" listItems={["gallery (object)"]}>
            <MasonryGallery gallery={examples.gallery}></MasonryGallery>
          </Display>

          <Display size="12" title="Cut Out Text" listItems={["text", "height (px)", "color", "background (url)"]}>
            <CutOutText text="BLUE SKY" height="500" color="#eaeaea" background="https://picsum.photos/id/806/1920/1080"></CutOutText>
          </Display>




        </div>

        <footer className="pt-3 mt-4 text-muted border-top">
          &copy; 2021 Andrea Marchetti
        </footer>
      </div>
    </main >

  );
}

export default App;
