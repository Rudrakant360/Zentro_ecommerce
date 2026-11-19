
import React from 'react';

const About = () => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      backgroundColor: '#fff',
      minHeight: '100vh',
    },
    hero: {
      background: 'linear-gradient(135deg, #f97316, #ea580c)',
      color: 'white',
      textAlign: 'center',
      padding: '75px 20px',
    },
    heroTitle: {
      fontSize: '42px',
      marginBottom: '15px',
      fontWeight: 'bold',
    },
    heroText: {
      fontSize: '17px',
      maxWidth: '650px',
      margin: 'auto',
      lineHeight: '1.7',
    },
    content: {
      maxWidth: '1100px',
      margin: 'auto',
      padding: '60px 25px',
    },
    section: {
      marginBottom: '50px',
    },
    heading: {
      fontSize: '28px',
      color: '#ea580c',
      marginBottom: '18px',
    },
    paragraph: {
      fontSize: '16px',
      lineHeight: '1.9',
      color: '#666',
    },
    cards: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '22px',
      marginTop: '25px',
    },
    card: {
      padding: '28px 20px',
      borderRadius: '12px',
      backgroundColor: '#fff7ed',
      textAlign: 'center',
      border: '1px solid #fed7aa',
    },
    icon: {
      fontSize: '35px',
      marginBottom: '12px',
    },
    cardTitle: {
      fontSize: '19px',
      color: '#ea580c',
      marginBottom: '10px',
    },
    cardText: {
      color: '#666',
      lineHeight: '1.6',
      fontSize: '14px',
    },
    footer: {
      backgroundColor: '#1f2937',
      color: 'white',
      textAlign: 'center',
      padding: '25px',
      fontSize: '14px',
    },
  };

  return (
    <div style={styles.container}>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>About Zentro</h1>
        <p style={styles.heroText}>
          Your one-stop destination for quality products,
          amazing deals, and a seamless shopping experience.
          We make online shopping simple, convenient, and enjoyable.
        </p>
      </section>

      <main style={styles.content}>

        {/* Who We Are */}
        <section style={styles.section}>
          <h2 style={styles.heading}>Who We Are</h2>
          <p style={styles.paragraph}>
            Welcome to Zentro, your trusted online shopping destination.
            We believe shopping should be easy, affordable, and accessible
            to everyone. Our platform brings together a wide range of
            products to meet your everyday needs.
          </p>
          <p style={styles.paragraph}>
            From discovering new products to placing your order,
            we aim to provide a smooth and enjoyable experience
            at every step.
          </p>
        </section>

        {/* Mission */}
        <section style={styles.section}>
          <h2 style={styles.heading}>Our Mission</h2>
          <p style={styles.paragraph}>
            Our mission is to make online shopping effortless by
            offering quality products, competitive prices, secure
            payments, and reliable customer service. We want to build
            a shopping platform where customers feel confident
            and satisfied.
          </p>
        </section>

        {/* Why Choose Us */}
        <section style={styles.section}>
          <h2 style={styles.heading}>Why Choose Zentro?</h2>

          <div style={styles.cards}>

            <div style={styles.card}>
              <div style={styles.icon}>🛍️</div>
              <h3 style={styles.cardTitle}>Quality Products</h3>
              <p style={styles.cardText}>
                Explore a carefully selected range of products
                for your everyday needs.
              </p>
            </div>

            <div style={styles.card}>
              <div style={styles.icon}>💰</div>
              <h3 style={styles.cardTitle}>Best Prices</h3>
              <p style={styles.cardText}>
                Enjoy competitive prices and great value
                with every purchase.
              </p>
            </div>

            <div style={styles.card}>
              <div style={styles.icon}>🔒</div>
              <h3 style={styles.cardTitle}>Secure Shopping</h3>
              <p style={styles.cardText}>
                Shop with confidence through a convenient
                and secure shopping experience.
              </p>
            </div>

            <div style={styles.card}>
              <div style={styles.icon}>🚚</div>
              <h3 style={styles.cardTitle}>Easy Shopping</h3>
              <p style={styles.cardText}>
                Enjoy a simple ordering process designed
                to make shopping convenient.
              </p>
            </div>

          </div>
        </section>

        {/* Vision */}
        <section style={styles.section}>
          <h2 style={styles.heading}>Our Vision</h2>
          <p style={styles.paragraph}>
            We envision Zentro becoming a trusted shopping destination
            where technology, convenience, and customer satisfaction
            come together to create a better online shopping experience.
          </p>
        </section>

      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Zentro. All Rights Reserved.</p>
        <p>Shop Smart. Shop Better. Shop Zentro.</p>
      </footer>

    </div>
  );
};

export default About;
