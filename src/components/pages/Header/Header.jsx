// Header.jsx
import React, { useState } from "react";
import "./Header.css"; // eski stil saqlanib qoladi

const Header = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* SIZNING ESKI HEADERINGIZ — O‘ZGARMAYDI */}
      <header className="header">
        <div className="balance">
          <div
            className="profile-icon"
            onClick={() => setIsModalOpen(true)}
            style={{ cursor: "pointer" }}
          >
            <div className="icon-placeholder">
              <img
                src="https://freesvg.org/img/abstract-user-flat-4.png"
                alt="user"
              />
            </div>
          </div>

          <div className="money">
            0.00 UZS
            <span className="plus">+</span>
          </div>
        </div>
      </header>

      {/* YANGI MODAL — ALOHIDA CLASSLAR BILAN */}
      {isModalOpen && (
        <div className="user-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="user-modal" onClick={(e) => e.stopPropagation()}>
            
            {/* Modal Header */}
            <div className="user-modal-header">
              <div className="user-modal-profile">
                <div className="user-modal-avatar"></div>
                <div className="user-modal-info">
                  <h3>NAME SURNAME</h3>
                  <p>@username</p>
                </div>
              </div>
            </div>

            {/* History */}
            <div className="user-modal-body">
              <h2 className="user-modal-title">HISTORY</h2>

              <div className="user-table-header">
                <div className="user-th-action">
                  <span className="user-dot"></span>
                  ACTION TYPE
                </div>
                <div className="user-th-status">STATUS</div>
              </div>

              {/* Misol uchun bir nechta qator */}
              <div className="user-table-row">
                <div className="user-cell">Transfer</div>
                <div className="user-cell">+250 000</div>
                <div className="user-cell">06.12.2025</div>
              </div>

              {/* Bo‘sh qatorlar (dizayn uchun) */}
              {[...Array(6)].map((_, i) => (
                <div key={i} className="user-table-row user-empty-row"></div>
              ))}
            </div>

            {/* Close button */}
            <button
              className="user-modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;