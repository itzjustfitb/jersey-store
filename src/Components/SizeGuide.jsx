function SizeGuide({ setModalOpen, modalOpen }) {
  return (
    <div
      onClick={() => setModalOpen(false)}
      className={`sizeguide__modal ${modalOpen ? "modal__open" : ""}`}
    >
      <div className="sizeguide__container">
        <div className="sizeguide__title">
          <i onClick={() => setModalOpen(false)} className="ri-close-line"></i>
          <h1>ÖZƏL DİZAYN FUTBOL FORMASI ÖLÇÜLƏRİ</h1>
          <p>
            Məhsul ölçülərində 0.5-1 sm fərq ola bilir.
            <span>
              Uzunluq, en, boy santimetr, çəki isə kiloqram ilə qeyd edilmişdir.
            </span>
          </p>
        </div>
        <table>
          <thead>
            <tr>
              <th>ÖLÇÜ</th>
              <th>UZUNLUQ(SM)</th>
              <th>EN(SM)</th>
              <th>BOY(SM)</th>
              <th>ÇƏKİ(KQ)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>S</td>
              <td>69-71</td>
              <td>53-55</td>
              <td>162-170</td>
              <td>50-62</td>
            </tr>
            <tr>
              <td>M</td>
              <td>71-73</td>
              <td>55-57</td>
              <td>170-176</td>
              <td>68-78</td>
            </tr>
            <tr>
              <td>L</td>
              <td>73-75</td>
              <td>57-58</td>
              <td>176-182</td>
              <td>78-83</td>
            </tr>
            <tr>
              <td>XL</td>
              <td>75-78</td>
              <td>58-60</td>
              <td>182-190</td>
              <td>90-97</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SizeGuide;
