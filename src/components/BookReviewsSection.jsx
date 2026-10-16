// src/components/BookReviewsSection.jsx
import React, { useState } from "react";
import {
  FaBookOpen,
  FaStar,
  FaQuoteLeft,
  FaTimes,
  FaArrowRight,
  FaCheckCircle,
  FaExternalLinkAlt
} from "react-icons/fa";
import { SiWordpress } from "react-icons/si";
import { bookReviews, personalInfo } from "../data/portfolioData";
import "./BookReviewsSection.css";

function BookReviewsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeReviewModal, setActiveReviewModal] = useState(null);

  const categories = ["All", "Architecture", "Philosophy", "Literature", "Engineering"];

  const filteredReviews =
    selectedCategory === "All"
      ? bookReviews
      : bookReviews.filter((b) => b.category === selectedCategory);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    return (
      <div className="star-rating" title={`${rating} out of 5 stars`}>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="star-icon filled" />
        ))}
        {hasHalf && <FaStar className="star-icon half" />}
        <span className="rating-number">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <section id="book-reviews" className="book-reviews-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-badge">
            <FaBookOpen />
            <span>LITERARY ESSAYS &amp; CRITICAL REFLECTIONS</span>
          </div>
          <h2 className="section-title">Book Reviews &amp; Blog</h2>
          <p className="section-subtitle">
            Distilling core architectural paradigms, cognitive loops, and existential themes
            across distributed systems, artificial intelligence, and world literature.
          </p>
        </div>

        {/* Category Filters */}
        <div className="book-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`book-filter-btn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === "All" ? "All Reviews" : cat}
            </button>
          ))}
        </div>

        {/* Book Cards Grid */}
        <div className="book-reviews-grid">
          {filteredReviews.map((book) => (
            <article key={book.id} className="book-card glass-card">
              {/* Card Banner / Spine */}
              <div
                className="book-card-header"
                style={{ background: book.gradient }}
              >
                <div className="book-card-badge-row">
                  <span className="book-genre-pill">{book.tag}</span>
                  <span className="book-year-pill">Read in {book.yearRead}</span>
                </div>
                <div className="book-cover-art">
                  <FaBookOpen size={36} className="book-cover-icon" />
                </div>
              </div>

              {/* Card Body */}
              <div className="book-card-body">
                <div className="book-meta-row">
                  {renderStars(book.rating)}
                  <span className="book-category-tag">{book.category}</span>
                </div>

                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">by {book.author}</p>

                {/* Quote Block */}
                <div className="book-quote-box">
                  <FaQuoteLeft className="quote-icon" />
                  <p className="book-quote-text">"{book.quote}"</p>
                </div>

                {/* Review Summary */}
                <p className="book-summary-text">{book.summary}</p>

                {/* Key Takeaways */}
                <div className="book-takeaways">
                  <span className="takeaways-label">Key Insights:</span>
                  <ul className="takeaways-list">
                    {book.takeaways.slice(0, 2).map((takeaway, idx) => (
                      <li key={idx} className="takeaway-item">
                        <FaCheckCircle className="takeaway-check" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Read Full Review Button */}
                <button
                  className="read-review-btn"
                  onClick={() => setActiveReviewModal(book)}
                >
                  <span>Read Full Review Essay</span>
                  <FaArrowRight size={13} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* External Blog Promotion Callout */}
        <div className="blog-callout-card glass-card">
          <div className="blog-callout-content">
            <div className="blog-callout-icon-wrap">
              <SiWordpress size={36} />
            </div>
            <div className="blog-callout-text">
              <h3 className="blog-callout-title">
                Explore More Literary Essays &amp; Philosophical Notes
              </h3>
              <p className="blog-callout-desc">
                Follow Obayed's ongoing essays on Bengali literature, cognitive linguistics, and
                computational philosophy published on his personal WordPress blog.
              </p>
            </div>
          </div>
          <a
            href={personalInfo.socialLinks.wordpress}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary blog-callout-btn"
          >
            <span>Visit WordPress Blog</span>
            <FaExternalLinkAlt size={13} />
          </a>
        </div>
      </div>

      {/* Full Review Essay Modal */}
      {activeReviewModal && (
        <div
          className="review-modal-backdrop"
          onClick={() => setActiveReviewModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="review-modal-card glass-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setActiveReviewModal(null)}
              aria-label="Close review modal"
            >
              <FaTimes size={18} />
            </button>

            <div
              className="modal-header-banner"
              style={{ background: activeReviewModal.gradient }}
            >
              <span className="modal-tag-badge">{activeReviewModal.tag}</span>
              <h2 className="modal-book-title">{activeReviewModal.title}</h2>
              <p className="modal-book-author">by {activeReviewModal.author}</p>
              <div className="modal-rating-row">
                {renderStars(activeReviewModal.rating)}
                <span className="modal-year-read">Finished: {activeReviewModal.yearRead}</span>
              </div>
            </div>

            <div className="modal-body-scroll">
              <div className="modal-quote-callout">
                <FaQuoteLeft className="modal-quote-icon" />
                <blockquote className="modal-quote-text">
                  "{activeReviewModal.quote}"
                </blockquote>
              </div>

              <div className="modal-essay-content">
                <h4 className="essay-heading">Analytical Review &amp; Reflections</h4>
                <p className="essay-paragraph">{activeReviewModal.fullReview}</p>
              </div>

              <div className="modal-takeaways-box">
                <h4 className="essay-heading">Core Takeaways for Engineers &amp; Thinkers</h4>
                <ul className="modal-takeaways-list">
                  {activeReviewModal.takeaways.map((point, i) => (
                    <li key={i} className="modal-takeaway-item">
                      <FaCheckCircle className="takeaway-check" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-footer-action">
                <button
                  className="btn btn-secondary modal-done-btn"
                  onClick={() => setActiveReviewModal(null)}
                >
                  Close Review
                </button>
                <a
                  href={personalInfo.socialLinks.wordpress}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <SiWordpress /> View WordPress Blog
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default BookReviewsSection;
