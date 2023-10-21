import React from 'react'

const clients = [
    {
        text: 'lorem10',
        author_image: '../../../public/images/oceano.jpg',
        author: 'sdfsdfds',
        ranking: 5,
        company: 'Google'
    },

    {
        text: 'lorem10',
        author_image: '../../../public/images/vialactea.jpg',
        author: 'sdfsdfds',
        ranking: 5,
        company: 'Google'
    },
    
    {
        text: 'lorem10',
        author_image: '../../../public/images/tormenta.jpg',
        author: 'sdfsdfds',
        ranking: 5,
        company: 'Google'
    }
];

const Testimonials = () => {
    return (
      <>
        <h2>Clients</h2>
        <div>
          {clients.map((client, index) => {
            return (
              <div key={index}>
                <h3>[client.text]</h3>
                <div>
                  <img src= {client.author_image} alt='author' width='50' height='50'></img>
                  <p>
                    <img src="../../../public/images/tormenta.jpg" alt='ranking' />
                    {client.author}
                    <br />
                    {client.company}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
}

export default Testimonials