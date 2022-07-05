import logo from './aventique.svg';
import { Link, Outlet } from 'react-router-dom';
import gallery from './gallery.png';

export default function App() {
  return (
    <div className="h-full">
      <header className="bg-orange-300 px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <img width={230} height={240} src={logo} alt="Aventique's logo" />
        </Link>
        <Link
          to="albums"
          className="hover-underline-animation text-xl font-primary uppercase tracking-wider text-slate-700 hover:text-slate-600 hover:font-semibold"
        >
          Albums
        </Link>
      </header>
      <main className="pt-2 w-full container mx-auto h-screen flex items-center justify-evenly">
        <div>
          <h1 className="pb-6 text-4xl font-style text-slate-700 font-light tracking-wider">
            Photo Gallery
          </h1>
          <h2 className="pb-2 text-xl font-primary ">
            A photograph keeps a moment <br /> from running away
          </h2>
        </div>
        <img src={gallery} width={750} height={550} alt="Gallery" />
      </main>
      <Outlet />
    </div>
  );
}
