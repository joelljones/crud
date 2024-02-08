import CreatePost from './components/CreatePost';
import Posts from './components/Posts';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <div className="flex w-screen px-4 justify-center h-screen overflow-hidden">
        <Sidebar />
        <div className="flex flex-col w-[500px] lg:w-[672px] m-2 space-y-4 overflow-y-auto">
          <CreatePost />
          <Posts />
        </div>
      </div>
    </>
  );
}

export default App;
