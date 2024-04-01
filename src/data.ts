export type Item = {
  id: string;
  label: string;
  selection: string;
  price?: number;
  quantity?: number;
};
export type Data = {
  id: string;
  category: "Jacket" | "Pants" | "Waistcoat";
  items: Item[];
};

export const data: Data[] = [
  {
    id: "jacket",
    category: "Jacket",
    items: [
      {
        id: "jacket-detail-1",
        label: "Modell",
        selection: "Regular fit Adam blazer",
        price: 7399,
        quantity: 1,
      },
      {
        id: "jacket-detail-2",
        label: "Type",
        selection: "Jacket",
      },
      {
        id: "jacket-detail-3",
        label: "Buttoning",
        selection: "Single breasted",
      },
      {
        id: "jacket-detail-4",
        label: "Fit",
        selection: "Regular fit",
      },
      {
        id: "jacket-detail-5",
        label: "Shoulder",
        selection: "Unconstructed",
      },
      {
        id: "jacket-detail-6",
        label: "Lapel",
        selection: "Notch Lapel",
      },
      {
        id: "jacket-detail-7",
        label: "Lining",
        selection: "Fully Lined",
      },
      {
        id: "jacket-detail-8",
        label: "Pockets",
        selection: "Flap Pockets",
      },
    ],
  },
  {
    id: "pants",
    category: "Pants",
    items: [
      {
        id: "pants-detail-1",
        label: "Modell",
        selection: "Regular fit Adam pants",
        price: 2299,
        quantity: 2,
      },
      {
        id: "pants-detail-2",
        label: "Type",
        selection: "Pants",
      },
      {
        id: "pants-detail-3",
        label: "Fit",
        selection: "Regular fit",
      },
      {
        id: "pants-detail-4",
        label: "Waist",
        selection: "Normal waist",
      },
      {
        id: "pants-detail-5",
        label: "Front",
        selection: "Flat front",
      },
    ],
  },
  {
    id: "waistcoat",
    category: "Waistcoat",
    items: [
      {
        id: "waistcoat-detail-1",
        label: "Modell",
        selection: "Regular fit Adam waistcoat",
        price: 1199,
        quantity: 1,
      },
      {
        id: "waistcoat-detail-2",
        label: "Type",
        selection: "Waistcoat",
      },
      {
        id: "waistcoat-detail-3",
        label: "Fit",
        selection: "Regular fit",
      },
      {
        id: "waistcoat-detail-4",
        label: "Breast",
        selection: "Single breasted",
      },
      {
        id: "waistcoat-detail-5",
        label: "Buttons",
        selection: "Pez",
      },
    ],
  },
];
