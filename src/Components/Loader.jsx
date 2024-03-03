function Loader() {
  // return (
  //   <div className={`loader ${isLoading ? "hide__loader" : ""}`}>
  //     <div className="spinner">
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="loader">
      <div className="custom-loader"></div>
    </div>
  );
}

export default Loader;
