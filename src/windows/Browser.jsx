import { WindowControls } from "#components";
import { blogPosts } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import {
  ChevronLeft,
  PanelLeft,
  ChevronRight,
  ShieldHalf,
  Search,
  Plus,
  Copy,
  Share,
  MoveRight,
} from "lucide-react";

const Browser = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="browser" />
        <PanelLeft className="ml-10 icon" />
        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft className="icon" />
          <ChevronRight className="icon" />
        </div>
        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />
          <div className="search">
            <Search className="icon" />
            <input
              type="text"
              placeholder="Search or enter website name"
              className="flex-1"
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>
      <div className="blog-scroll">
        
      </div>
      <div className="blog">
        <h2>My Hobbies</h2>
        <div className="space-y-8">
          {blogPosts.map(({ id, image, title, link, description }) => (
            <div key={id} className="blog-post">
              <div className="col-spa-2">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <p>{title}</p>
                <h3>{description}</h3>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  Check out more <MoveRight className="icon-hover" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
const BrowserWindow = WindowWrapper(Browser, "browser");

export default BrowserWindow;
