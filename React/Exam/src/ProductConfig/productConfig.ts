export const productFormConfig = [
  {
    id: 1,
    name: "title",
    label: "Product Title",
    type: "text",
    placeholder: "Enter product title",
    required: true,
  },
  {
    id: 2,
    name: "price",
    label: "Price",
    type: "number",
    placeholder: "Enter price",
    required: true,
  },
  {
    id: 3,
    name: "description",
    label: "Description",
    type: "textarea",
    placeholder: "Enter description",
  },
  {
    id: 4,
    name: "category",
    label: "Category",
    type: "select",
    options: [], // will inject dynamically
  },
  {
    id: 5,
    name: "images",
    label: "Image URL",
    type: "text",
    placeholder: "Enter image URL",
  },
  {
    id: 6,
    name: "stock",
    label: "Stock",
    type: "number",
    defaultValue: 10,
  },
  {
    id: 7,
    name: "rating",
    label: "Rating",
    type: "number",
    defaultValue: 0,
  },
];