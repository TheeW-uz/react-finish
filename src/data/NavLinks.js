const navLinks = [
    {
        id: 1,
        title: "Smartphones and Gadgets",
        dropdown: [
            { title: "Smartphones and Phones", submenu: ["Apple Smartphones", "Techno Smartphone", "Xiaomi Smartphones", "Vivo Smartphones", "Honor Smartphones", "Samsung Smartphones"] },
            { title: "Accessories for Smartphones", submenu: ["Case for Smartphone", "Screen Protector for Iphone", "Charger", "Protector"] },
            { title: "Watch and Accessories", submenu: ["Smartwatch", "Handwatch", "Smart ring", "Fitness Tracker", "Watch belts"] },
            { title: "Gadgets", submenu: ["Virtual Reality Headsets", "Smart Glasses", "Tech for Blog"] },
            { title: "Techs", submenu: ["Battery and Chargers", "Trackers", "Cables", "Portable Batteries"] },
            { title: "Camera and Video Cameras", submenu: ["Photo Papers", "Cameras"] },
        ]
    },
    {
        id: 2,
        title: "Audio Technology",
        dropdown: [
            { title: "Headphones", submenu: ["Wireless Headphones", "Wired Headphones", "Noise Cancelling", "Gaming Headsets", "In-Ear Earbuds"] },
            { title: "Speakers", submenu: ["Portable Speakers", "Bluetooth Speakers", "Home Audio Systems", "Smart Speakers"] },
            { title: "Professional Audio", submenu: ["Studio Monitors", "Microphones", "Mixers", "Audio Interfaces"] },
            { title: "Car Audio", submenu: ["Car Speakers", "Subwoofers", "Amplifiers"] },
            { title: "Accessories", submenu: ["Audio Cables", "Adapters", "Stands", "Cases"] },
        ]
    },

    {
        id: 3,
        title: "Laptops & Computers",
        dropdown: [
            { title: "Laptops", submenu: ["Gaming Laptops", "Ultrabooks", "2-in-1 Laptops", "Business Laptops"] },
            { title: "Desktop PCs", submenu: ["Gaming PCs", "All-in-One PCs", "Mini PCs"] },
            { title: "Components", submenu: ["Processors (CPU)", "Graphics Cards (GPU)", "Motherboards", "RAM", "SSD & HDD"] },
            { title: "Peripherals", submenu: ["Monitors", "Keyboards", "Mice", "Webcams"] },
            { title: "Networking", submenu: ["Routers", "Modems", "Wi-Fi Adapters"] },
            { title: "Storage", submenu: ["External Drives", "Flash Drives", "NAS Systems"] },
        ]
    },

    {
        id: 4,
        title: "TVs & Projectors",
        dropdown: [
            { title: "Televisions", submenu: ["Smart TVs", "4K TVs", "OLED TVs", "QLED TVs", "Android TVs"] },
            { title: "Projectors", submenu: ["Home Theater Projectors", "Portable Projectors", "Mini Projectors"] },
            { title: "Streaming Devices", submenu: ["TV Boxes", "Chromecast", "Media Players"] },
            { title: "TV Accessories", submenu: ["Wall Mounts", "Remote Controls", "HDMI Cables"] },
            { title: "Home Cinema", submenu: ["Soundbars", "Home Theater Systems"] },
        ]
    },

    {
        id: 5,
        title: "Home Appliances",
        dropdown: [
            { title: "Large Appliances", submenu: ["Refrigerators", "Washing Machines", "Dishwashers"] },
            { title: "Kitchen Appliances", submenu: ["Microwaves", "Ovens", "Coffee Machines", "Blenders"] },
            { title: "Small Appliances", submenu: ["Irons", "Kettles", "Toasters"] },
            { title: "Cleaning", submenu: ["Vacuum Cleaners", "Robot Vacuums", "Steam Cleaners"] },
            { title: "Climate", submenu: ["Air Conditioners", "Heaters", "Air Purifiers", "Humidifiers"] },
        ]
    },

    {
        id: 6,
        title: "Household Equipment",
        dropdown: [
            { title: "Kitchen Tools", submenu: ["Cookware", "Knives", "Utensils", "Cutting Boards"] },
            { title: "Cleaning Supplies", submenu: ["Mops", "Buckets", "Brushes", "Gloves"] },
            { title: "Storage & Organization", submenu: ["Boxes", "Shelves", "Closet Organizers"] },
            { title: "Home Essentials", submenu: ["Trash Bins", "Laundry Baskets"] },
        ]
    },

    {
        id: 7,
        title: "Beauty, Health & Personal Care",
        dropdown: [
            { title: "Makeup", submenu: ["Foundation", "Lipstick", "Mascara", "Eyeshadow"] },
            { title: "Skincare", submenu: ["Cleansers", "Moisturizers", "Serums", "Sunscreen"] },
            { title: "Haircare", submenu: ["Shampoo", "Conditioner", "Hair Oil", "Hair Styling"] },
            { title: "Personal Care", submenu: ["Shavers", "Trimmers", "Hair Dryers"] },
            { title: "Health Devices", submenu: ["Thermometers", "Blood Pressure Monitors", "Massagers"] },
            { title: "Fragrance", submenu: ["Perfumes", "Body Sprays"] },
        ]
    },

    {
        id: 8,
        title: "Smart Home",
        dropdown: [
            { title: "Lighting", submenu: ["Smart Bulbs", "LED Strips", "Smart Lamps"] },
            { title: "Security", submenu: ["Smart Cameras", "Video Doorbells", "Alarm Systems"] },
            { title: "Control Systems", submenu: ["Smart Hubs", "Voice Assistants"] },
            { title: "Smart Plugs", submenu: ["Wi-Fi Plugs", "Energy Monitoring Plugs"] },
            { title: "Sensors", submenu: ["Motion Sensors", "Temperature Sensors"] },
        ]
    },

    {
        id: 9,
        title: "Gaming Technology",
        dropdown: [
            { title: "Consoles", submenu: ["PlayStation 5", "Xbox Series X", "Nintendo Switch"] },
            { title: "Gaming Accessories", submenu: ["Controllers", "Headsets", "Charging Stations"] },
            { title: "PC Gaming", submenu: ["Gaming Keyboards", "Gaming Mice", "Gaming Monitors"] },
            { title: "VR Gaming", submenu: ["VR Headsets", "VR Controllers"] },
            { title: "Games", submenu: ["Digital Games", "Game Discs"] },
        ]
    },

    {
        id: 10,
        title: "Sports & Outdoors",
        dropdown: [
            { title: "Fitness Equipment", submenu: ["Dumbbells", "Treadmills", "Exercise Bikes"] },
            { title: "Outdoor Gear", submenu: ["Tents", "Sleeping Bags", "Camping Tools"] },
            { title: "Sports Equipment", submenu: ["Football", "Basketball", "Tennis"] },
            { title: "Cycling", submenu: ["Bicycles", "Helmets", "Accessories"] },
            { title: "Travel", submenu: ["Suitcases", "Travel Bags"] },
        ]
    },

    {
        id: 11,
        title: "Electronics",
        dropdown: [
            { title: "Mobile Accessories", submenu: ["Chargers", "Power Banks", "Cables", "Cases"] },
            { title: "Wearables", submenu: ["Smartwatches", "Fitness Trackers", "Smart Rings"] },
            { title: "Batteries", submenu: ["Rechargeable Batteries", "Battery Chargers"] },
            { title: "Adapters", submenu: ["USB Adapters", "Converters"] },
        ]
    },

    {
        id: 12,
        title: "Kids & Toys",
        dropdown: [
            { title: "Toys", submenu: ["Educational Toys", "RC Toys", "Board Games"] },
            { title: "Baby Care", submenu: ["Diapers", "Baby Food", "Strollers"] },
            { title: "Clothing", submenu: ["Kids Clothing", "Shoes"] },
            { title: "School Items", submenu: ["Backpacks", "Lunch Boxes"] },
        ]
    },

    {
        id: 13,
        title: "Construction Tools",
        dropdown: [
            { title: "Power Tools", submenu: ["Drills", "Angle Grinders", "Saws"] },
            { title: "Hand Tools", submenu: ["Hammers", "Wrenches", "Screwdrivers"] },
            { title: "Measuring Tools", submenu: ["Laser Levels", "Tape Measures"] },
            { title: "Heavy Equipment", submenu: ["Generators", "Air Compressors"] },
        ]
    },

    {
        id: 14,
        title: "Home Tools",
        dropdown: [
            { title: "Repair Kits", submenu: ["Tool Sets", "Multi-tools"] },
            { title: "Electrical", submenu: ["Testers", "Soldering Tools"] },
            { title: "Fasteners", submenu: ["Nails", "Screws", "Bolts"] },
        ]
    },

    {
        id: 15,
        title: "Home & Garden",
        dropdown: [
            { title: "Garden Tools", submenu: ["Shovels", "Rakes", "Hoses"] },
            { title: "Plants", submenu: ["Indoor Plants", "Seeds", "Fertilizers"] },
            { title: "Outdoor Furniture", submenu: ["Garden Chairs", "Tables"] },
            { title: "Decor", submenu: ["Lights", "Garden Decor"] },
        ]
    },

    {
        id: 16,
        title: "Food Products",
        dropdown: [
            { title: "Groceries", submenu: ["Snacks", "Beverages", "Canned Food"] },
            { title: "Fresh Products", submenu: ["Fruits", "Vegetables", "Meat"] },
            { title: "Bakery", submenu: ["Bread", "Pastries"] },
            { title: "Staples", submenu: ["Rice", "Flour", "Oil"] },
        ]
    },

    {
        id: 17,
        title: "Office & Stationery",
        dropdown: [
            { title: "Office Supplies", submenu: ["Pens", "Notebooks", "Folders"] },
            { title: "School Supplies", submenu: ["Backpacks", "Art Supplies"] },
            { title: "Office Equipment", submenu: ["Printers", "Scanners", "Calculators"] },
        ]
    },

    {
        id: 18,
        title: "Household Chemicals",
        dropdown: [
            { title: "Cleaning", submenu: ["Detergents", "Disinfectants", "Glass Cleaners"] },
            { title: "Laundry", submenu: ["Washing Powder", "Fabric Softener"] },
            { title: "Air Care", submenu: ["Air Fresheners"] },
        ]
    },

    {
        id: 19,
        title: "Pet Supplies",
        dropdown: [
            { title: "Pet Food", submenu: ["Dog Food", "Cat Food"] },
            { title: "Accessories", submenu: ["Leashes", "Bowls", "Toys"] },
            { title: "Care", submenu: ["Shampoos", "Grooming"] },
        ]
    },

    {
        id: 20,
        title: "Books",
        dropdown: [
            { title: "Fiction", submenu: ["Novels", "Fantasy", "Detective"] },
            { title: "Education", submenu: ["Textbooks", "Language Learning"] },
            { title: "Children", submenu: ["Story Books", "Coloring Books"] },
            { title: "Business", submenu: ["Marketing", "Finance"] },
        ]
    }
];

export default navLinks;