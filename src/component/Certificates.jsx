import { useState } from "react";
import certificates from "../component/CertificatesData";
import "../CSS/Certificates.css";

function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="certificates" id="certificates">
      <div className="container">

        <div className="section-title">
          <span>ACHIEVEMENTS</span>
          <h2>Professional Certificates</h2>
          <p>Click any certificate to view in full size</p>
        </div>

        <div className="certificate-grid">

          {certificates.map((certificate) => (
            <div
              className="certificate-card"
              key={certificate.id}
              onClick={() => setSelectedImage(certificate)}
            >
              <img
                src={certificate.image}
                alt={certificate.title}
              />

              <div className="certificate-info">
                <h3>{certificate.title}</h3>
                <p>{certificate.issuer}</p>
              </div>
            </div>
          ))}

        </div>

      </div>

      {selectedImage && (
        <div
          className="modal"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className="close"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </span>

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <h3>{selectedImage.title}</h3>
            <p>{selectedImage.issuer}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;