const products = [
  // 1. Fresh Produce
  { _id: '1', name: 'Fresh Apples (Shimla)', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6bc6c?w=500&q=80', description: 'Crisp and sweet fresh apples from Shimla.', category: 'Fresh Produce', price: 180, countInStock: 50 },
  { _id: '2', name: 'Organic Spinach Bundle', image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&q=80', description: 'Farm-fresh organic leafy spinach.', category: 'Fresh Produce', price: 40, countInStock: 30 },
  { _id: '3', name: 'Farm Potatoes', image: 'https://images.unsplash.com/photo-1518977673343-a4a62118a140?w=500&q=80', description: 'Fresh, versatile potatoes.', category: 'Fresh Produce', price: 35, countInStock: 100 },
  { _id: '25', name: 'Fresh Red Tomatoes', image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500&q=80', description: 'Juicy, ripe red tomatoes.', category: 'Fresh Produce', price: 45, countInStock: 80 },
  { _id: '26', name: 'Robusta Bananas (Dozen)', image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500&q=80', description: 'Sweet and healthy robusta bananas.', category: 'Fresh Produce', price: 60, countInStock: 40 },
  { _id: '27', name: 'Crunchy Orange Carrots', image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&q=80', description: 'Fresh carrots straight from the farm.', category: 'Fresh Produce', price: 50, countInStock: 60 },

  // 2. Staples
  { _id: '4', name: 'Aashirvaad Whole Wheat Atta', image: 'https://images.unsplash.com/photo-1627484744141-86641e70eab0?w=500&q=80', description: 'High quality whole wheat flour.', category: 'Staples', price: 350, countInStock: 60 },
  { _id: '5', name: 'India Gate Basmati Rice', image: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?w=500&q=80', description: 'Premium long grain basmati rice.', category: 'Staples', price: 250, countInStock: 40 },
  { _id: '6', name: 'Tata Sampann Toor Dal', image: 'https://images.unsplash.com/photo-1585996025997-6a2dc8a26bf0?w=500&q=80', description: 'Unpolished, protein-rich toor dal.', category: 'Staples', price: 160, countInStock: 35 },
  { _id: '28', name: 'Premium Thick Poha', image: 'https://images.unsplash.com/photo-1604328471151-b52226907017?w=500&q=80', description: 'High-quality flattened rice for breakfast.', category: 'Staples', price: 55, countInStock: 50 },
  { _id: '29', name: 'Fortune Besan (Gram Flour)', image: 'https://images.unsplash.com/photo-1615486171448-4fb654b41da7?w=500&q=80', description: 'Pure chana dal besan.', category: 'Staples', price: 95, countInStock: 45 },
  { _id: '30', name: 'Organic Ragi (Finger Millet)', image: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?w=500&q=80', description: 'Nutritious and organic finger millet.', category: 'Staples', price: 110, countInStock: 30 },

  // 3. Oils & Spices
  { _id: '7', name: 'Fortune Sunflower Oil', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&q=80', description: 'Refined sunflower cooking oil.', category: 'Oils & Spices', price: 180, countInStock: 45 },
  { _id: '8', name: 'Everest Garam Masala', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&q=80', description: 'Aromatic mixed spice powder.', category: 'Oils & Spices', price: 75, countInStock: 80 },
  { _id: '9', name: 'Amul Pure Cow Ghee', image: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=500&q=80', description: 'Rich and pure cow ghee.', category: 'Oils & Spices', price: 550, countInStock: 25 },
  { _id: '31', name: 'Dhara Mustard Oil', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&q=80', description: 'Kachi Ghani pure mustard oil.', category: 'Oils & Spices', price: 195, countInStock: 40 },
  { _id: '32', name: 'Catch Turmeric Powder', image: 'https://images.unsplash.com/photo-1615486171448-4fb654b41da7?w=500&q=80', description: 'Bright and pure Haldi powder.', category: 'Oils & Spices', price: 65, countInStock: 70 },
  { _id: '33', name: 'Madhur Pure Refined Sugar', image: 'https://images.unsplash.com/photo-1581428982868-e410dd4470f3?w=500&q=80', description: 'Sulphur-free white sugar.', category: 'Oils & Spices', price: 55, countInStock: 100 },

  // 4. Dairy, Bread & Eggs
  { _id: '10', name: 'Amul Taaza Toned Milk', image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&q=80', description: 'Fresh toned milk carton.', category: 'Dairy, Bread & Eggs', price: 65, countInStock: 90 },
  { _id: '11', name: 'Britannia Whole Wheat Bread', image: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=500&q=80', description: 'Healthy brown sliced bread.', category: 'Dairy, Bread & Eggs', price: 50, countInStock: 40 },
  { _id: '12', name: 'Farm Fresh Brown Eggs (6 pcs)', image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=500&q=80', description: 'Protein-rich fresh brown eggs.', category: 'Dairy, Bread & Eggs', price: 70, countInStock: 50 },
  { _id: '34', name: 'Amul Fresh Malai Paneer', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc0?w=500&q=80', description: 'Soft and creamy fresh paneer blocks.', category: 'Dairy, Bread & Eggs', price: 85, countInStock: 30 },
  { _id: '35', name: 'Mother Dairy Classic Curd', image: 'https://images.unsplash.com/photo-1571127027582-720e58564a93?w=500&q=80', description: 'Thick and tasty plain dahi.', category: 'Dairy, Bread & Eggs', price: 35, countInStock: 60 },
  { _id: '36', name: 'Britannia Cheese Slices', image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=500&q=80', description: 'Individually wrapped cheese slices.', category: 'Dairy, Bread & Eggs', price: 140, countInStock: 25 },

  // 5. Dry Fruits & Cereals
  { _id: '13', name: 'Premium California Almonds', image: 'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=500&q=80', description: 'Crunchy, healthy almonds.', category: 'Dry Fruits & Cereals', price: 850, countInStock: 20 },
  { _id: '14', name: 'Quaker Rolled Oats', image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=500&q=80', description: 'Heart-healthy breakfast oats.', category: 'Dry Fruits & Cereals', price: 190, countInStock: 60 },
  { _id: '15', name: 'Kellogg\'s Corn Flakes', image: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=500&q=80', description: 'Crispy corn flakes cereal.', category: 'Dry Fruits & Cereals', price: 140, countInStock: 55 },
  { _id: '37', name: 'Whole Cashew Nuts (Kaju)', image: 'https://images.unsplash.com/photo-1595116744855-32130ff38753?w=500&q=80', description: 'Premium large size cashew nuts.', category: 'Dry Fruits & Cereals', price: 900, countInStock: 15 },
  { _id: '38', name: 'Sweet Golden Raisins (Kishmish)', image: 'https://images.unsplash.com/photo-1600185987158-75b8e99036c6?w=500&q=80', description: 'Naturally sweet and juicy raisins.', category: 'Dry Fruits & Cereals', price: 320, countInStock: 40 },
  { _id: '39', name: 'Kellogg\'s Muesli Fruit & Nut', image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=500&q=80', description: 'Multi-grain cereal with dry fruits.', category: 'Dry Fruits & Cereals', price: 315, countInStock: 25 },

  // 6. Snacks & Biscuits
  { _id: '16', name: 'Lay\'s Classic Salted Chips', image: 'https://images.unsplash.com/photo-1566478989037-e924e526a156?w=500&q=80', description: 'Crispy potato chips.', category: 'Snacks & Biscuits', price: 20, countInStock: 150 },
  { _id: '17', name: 'Britannia Bourbon Biscuits', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80', description: 'Chocolate cream-filled biscuits.', category: 'Snacks & Biscuits', price: 50, countInStock: 100 },
  { _id: '18', name: 'Haldiram\'s Aloo Bhujia', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80', description: 'Spicy Indian namkeen snack.', category: 'Snacks & Biscuits', price: 60, countInStock: 80 },
  { _id: '40', name: 'Hide & Seek Chocolate Chip', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&q=80', description: 'Crunchy chocolate chip cookies.', category: 'Snacks & Biscuits', price: 30, countInStock: 90 },
  { _id: '41', name: 'Doritos Cheese Nachos', image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=500&q=80', description: 'Bold cheese flavored tortilla chips.', category: 'Snacks & Biscuits', price: 40, countInStock: 75 },
  { _id: '42', name: 'Amul Dark Chocolate (99%)', image: 'https://images.unsplash.com/photo-1548741364-07e155b4ff8c?w=500&q=80', description: 'Intense 99% cacao dark chocolate bar.', category: 'Snacks & Biscuits', price: 150, countInStock: 30 },

  // 7. Beverages
  { _id: '19', name: 'Taj Mahal Tea Leaves', image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&q=80', description: 'Rich and aromatic Assam tea.', category: 'Beverages', price: 220, countInStock: 40 },
  { _id: '20', name: 'Nescafe Classic Coffee', image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=500&q=80', description: 'Instant coffee powder.', category: 'Beverages', price: 310, countInStock: 35 },
  { _id: '21', name: 'Real Mixed Fruit Juice', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=80', description: '100% real fruit juice carton.', category: 'Beverages', price: 110, countInStock: 50 },
  { _id: '43', name: 'Bisleri Packaged Water (1L)', image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=500&q=80', description: 'Safe, purified drinking water with added minerals.', category: 'Beverages', price: 20, countInStock: 200 },
  { _id: '44', name: 'Tropicana Mango Delight', image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=80', description: 'Delicious thick mango fruit beverage.', category: 'Beverages', price: 105, countInStock: 45 },
  { _id: '45', name: 'Lipton Honey Lemon Green Tea', image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=500&q=80', description: 'Healthy green tea bags for metabolism.', category: 'Beverages', price: 160, countInStock: 30 },

  // 8. Instant & Frozen Foods
  { _id: '22', name: 'Maggi 2-Minute Noodles', image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=500&q=80', description: 'Classic instant noodles.', category: 'Instant & Frozen Foods', price: 14, countInStock: 200 },
  { _id: '23', name: 'McCain French Fries', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&q=80', description: 'Frozen ready-to-fry potato fries.', category: 'Instant & Frozen Foods', price: 120, countInStock: 45 },
  { _id: '24', name: 'Sunfeast Yippee Pasta', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&q=80', description: 'Cheesy instant pasta.', category: 'Instant & Frozen Foods', price: 25, countInStock: 60 },
  { _id: '46', name: 'Safal Frozen Green Peas', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&q=80', description: 'Freshly frozen green peas.', category: 'Instant & Frozen Foods', price: 115, countInStock: 50 },
  { _id: '47', name: 'Haldiram\'s Ready-to-Eat Dal Makhani', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&q=80', description: 'Instant heat-and-eat Indian curry.', category: 'Instant & Frozen Foods', price: 110, countInStock: 40 },
  { _id: '48', name: 'Knorr Sweet Corn Soup', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=500&q=80', description: 'Classic instant sweet corn veg soup mix.', category: 'Instant & Frozen Foods', price: 55, countInStock: 70 }
];

module.exports = products;
