import React from 'react';
import productData from "@/public/script/scraped_data.json";
import ProductCardStaggered from "@/components/productCardStaggered";

const staggeredWidths = ['240px', '230px', '250px'];

function StaggeredLayout() {
    return (
        <div style={styles.container}>
          {productData.map((product, index) => (
              <ProductCardStaggered key={product.id} product={product} cardSize={getCardSize(index)} />
          ))}
        </div>
    );
}

const styles = {
    container: {
        marginLeft: 300,
        // marginRight: 250,
        padding: 0,
        width: '60vw',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 260px)',
        gridAutoRows: '10px',
        position: 'relative' as 'relative',
        // left: '50%',
        // transform: 'translateX(-50%)',
        justifyContent: 'center',
        // flex: 'flex',
        // backgroundColor: 'black'
    }
}

function getCardSize(index: number): 'small' | 'medium' | 'large' {
    // Define the sizes in the sequence: small, medium, large
    const sizes: ('small' | 'medium' | 'large')[] = ['small', 'medium', 'large', 'small'];

    // Return the size based on the index using modular arithmetic
    return sizes[index % sizes.length];
}

export default StaggeredLayout;
