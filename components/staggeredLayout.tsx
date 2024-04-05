import React from 'react';
import productData from "@/public/script/scraped_data.json";
import ProductCardStaggered from "@/components/productCardStaggered";
const staggeredWidths = ['250px', '240px', '270px'];

// function StaggeredLayout() {
//     const gridTemplateColumns = staggeredWidths.map(width => `${width} `).join('');

//     return (
//         <div className="grid" style={{ gridTemplateColumns: `repeat(auto-fill, ${gridTemplateColumns})`, gap: '6px', marginLeft: '250px', marginRight: '250px' }}>
//             {productData.map((product, index) => (
//                 <ProductCardStaggered key={product.id} product={product} />
//             ))}
//         </div>
//     );
// }

// Container is correct, but row spacing is not
function StaggeredLayout() {
    const gridTemplateColumns = staggeredWidths.map(width => `${width} `).join('');

    return (
        <div className="grid" style={{ gridTemplateColumns: `repeat(auto-fill, ${gridTemplateColumns})`, gap: '8px', marginLeft: '350px' }}>
            {productData.map((product, index) => (
                <div key={product.id} className="px-2">
                <ProductCardStaggered product={product} />
                </div>
            ))}
        </div>
    );
}

// Function to get fixed row span based on index
function getRowSpan(index: number): number {
    // Define fixed row span values
    const rowSpanValues = [20, 14, 16];
    // Return the corresponding row span value based on index
    return rowSpanValues[index % staggeredWidths.length];
}

export default StaggeredLayout;