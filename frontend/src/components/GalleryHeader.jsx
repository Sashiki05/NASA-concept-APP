/* eslint-disable react/prop-types */

import CloseButton from "./CloseButton";
import FilterButton from "./FilterButton";
import Loupe from "./Loupe";

function GalleryHeader({
  setGalleryVisible,
  searchQuery,
  setSearchQuery,
  setPageNum,
  setMyData,
  setPopup,
  matches,
}) {
  const filterArray = ["Sagittarius", "Earth", "Quiz", "Nebula"];

  function handleChange(e) {
    setSearchQuery(e.target.value);
    setMyData([]);
    setPageNum(1);
  }
  function closeGallery() {
    setGalleryVisible(false);
    setPopup("Gallery");
  }

  return (
    <div id="header">
      {matches && (
        <>
          <h1>Image Gallery</h1>
          <button type="button" onClick={closeGallery} className="close_button">
            <CloseButton />
          </button>
        </>
      )}
      {!matches && <h1>Gallery</h1>}
      <div className="searchBar">
        <div id="loupe-and-searchBar-container">
          <Loupe />
          <input
            placeholder="Search here"
            type="text"
            name=""
            id="searchBar"
            value={searchQuery}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div id="filters">
          {filterArray.map((e) => {
            return (
              <FilterButton
                filterText={e}
                setSearchQuery={setSearchQuery}
                setMyData={setMyData}
                setPageNum={setPageNum}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default GalleryHeader;
