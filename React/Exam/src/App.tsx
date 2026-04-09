import ProductPage from "./pages/ProductPage";

function App() {
  return <ProductPage />
}



// const baseUrl = "https://dummyjson.com/products";

// const [data, setData] = useState([]);
// const [page, setPage] = useState(1);
// const [total, setTotal] = useState(0);
// const [search, setSearch] = useState("");
// const [category, setCategory] = useState([]);
// const [name, setName] = useState("");
// const [order, setOrder] = useState("asc");
// const [sort, setSort] = useState("price");

// const limit = 10;
// const skip = (page - 1) * limit;

// let url;

// if (search) {
//   url = `${baseUrl}/search?q=${search}&limit=${limit}&skip=${skip}&sortBy=${sort}&order=${order}`;
// } else if (name) {
//   url = `${baseUrl}/category/${name}?limit=${limit}&skip=${skip}&sortBy=${sort}&order=${order}`;
// } else {
//   url = `${baseUrl}?limit=${limit}&skip=${skip}&sortBy=${sort}&order=${order}`;
// }


// const getAllCategory = async () => {
//   const res = await fetch(`${baseUrl}/category-list`);
//   const result = await res.json();
//   result.unshift("-- select option --")
//   // console.log(result);
//   setCategory(result);
// }

// const fetchProducts = async () => {
//   const res = await fetch(url);
//   const result = await res.json();
//   console.log(result);
//   // console.log(result);

//   setData(result.products);
//   setTotal(result.total || result.products.length);
// };

// useEffect(() => {
//   fetchProducts();
// }, [search, page, order, name, sort]);

// useEffect(() => {
//   getAllCategory();
// }, [])

// const totalPages = Math.ceil(total / limit);

// return (
//   <>
//     <input
//       placeholder="Sodh Bhai"
//       value={search}
//       onChange={(e) => {
//         setSearch(e.target.value);
//         setPage(1);
//       }}
//     />

//     <label>Order: </label>
//     <select onChange={(e) => { setOrder(e.target.value); setPage(1) }}>
//       <option value="asc">asc</option>
//       <option value="desc">desc</option>
//     </select>

//     <label>Category: </label>
//     <select onChange={(e) => {
//       if (e.target.value === "-- select option --") return;
//       setName(e.target.value); setPage(1)
//     }}>
//       {category.map((c) => (
//         <option key={c} value={c}>{c}</option>
//       ))}
//     </select>

//     <label>Sort By: </label>
//     <select onChange={(e) => {
//       if (e.target.value === "-- select option --") return;
//       setSort(e.target.value); setPage(1)
//     }}>
//       <option value="price">Price</option>
//       <option value="rating">Rating</option>
//     </select>


//     {data.map((product) => (
//       <div key={product.id}>
//         <p>
//           {product.title} | {product.description} | {product.category} | {product.price} | {product.rating} | {product.stock}
//         </p>
//         <img src={product.images[0]} height={100} width={100} />
//       </div>
//     ))}

//     {!search && (
//       <div>
//         <button
//           disabled={page === 1}
//           onClick={() => setPage((page) => page - 1)}
//         >
//           {"<=="}
//         </button>

//         <span>
//           {page} / {totalPages}
//         </span>

//         <button
//           disabled={page === totalPages}
//           onClick={() => setPage((page) => page + 1)}
//         >
//           {"==>"}
//         </button>
//       </div>
//     )}
//   </>
// );


// function App() {
//   const [data, setData] = useState([]); const [page, setPage] = useState(1);
//   const [total, setTotel] = useState(0);
//   const [search, setSearch] = useState("");

//   const limit = 10;

//   const fetchProducts = async () => {
//     const skip = (page - 1) * limit;

//     const url = search ? `https://dummyjson.com/products/search?q=${search}` : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

//     const res = await fetch(url);
//     const result = await res.json();
//     console.log(res);

//     setData(result.products);
//     setTotel(result.total);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [page, search]);

//   const totalPages = Math.ceil(total / limit);

//   return (
//     <>
//       <input
//         placeholder="Shodh bhai"
//         onChange={(e) => {
//           setSearch(e.target.value);
//           setPage(1);
//         }}
//         />

//       {data.map((product) => (
//         <>
//           <p key={product.id}>
//             {product.title} | {product.description}
//           </p>
//           <img src={product.images} height={100} width={100} />
//         </>
//       ))}

//       {!search

// && (
//   <div>
//             <button
//               onClick={() => setPage((page) => page - 1)}
//               >
//               {"<=="}
//             </button>
//             <span> ! {page} ! {totalPages}</span>
//             <button
//               onClick={() => setPage((page) => page + 1)}
//               >
//               {"==>"}
//             </button>
//           </div>
//         )}
//     </>
//   );
// }

export default App;