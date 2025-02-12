import imageUrls from './imageUrls';
import optimizedImageUrls from './optimizedImageUrls';

import './App.css';

const App = () => {
  return (
    <div>
      <img alt="image1" src={imageUrls.image1} />
      {/* <img alt="optimized-image" src={optimizedImageUrls.image1} /> */}
    </div>
  );
};

export default App;
