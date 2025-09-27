import { useState } from "react"
import Product from "./Product"

const Home = () => {
       const[product,setProduct]=useState([
  {
    "id": 1,
    "title": "Essence Mascara Lash Princess",
    "price": 9,
    "image": "https://imgs.search.brave.com/lnP1unpT9HET0qcX5TXhJ_E2kvg15-CmpBG7PkCgTe4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/aHVmZmluZ3RvbnBv/c3QuY29tL2Fzc2V0/LzY4ZDE3ZDdhMTQw/MDAwY2RiMTVjNWFh/NC5wbmc_Y2FjaGU9/QTUwd0dMellxUiZv/cHM9c2NhbGVmaXRf/NzIwX25vdXBzY2Fs/ZQ",
    "rating": 4.94
  },
  {
    "id": 2,
    "title": "Annibale Colombo Bed",
    "price": 1899,
    "image": "https://imgs.search.brave.com/itMJ-rxHDfYDuJS525-RY4HDrsAyEjLtu7OrUQLSqE0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbnRl/cmlvci1tYXJrZXQu/cnUvdXBsb2FkL3Jl/c2l6ZV9jYWNoZS9p/YmxvY2svNTgxLzkz/MF82NzJfMS9rdWVh/enlnYWJicTR6eGNj/eTg1eTl1eGJkcTlm/dXBmdS5qcGVn",
    "rating": 2.7
  },
  {
    "id": 3,
    "title": "Apple AirPods Max Silver",
    "price": 579,
    "image": "https://imgs.search.brave.com/Hn5kxJdWZhlcUfhfGqW0VB1dNoFi4NGqMWSaKZGg5MM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/NDk2NjY4Ni9waG90/by9iZWlqaW5nLWNo/aW5hLWFpcnBvZHMt/bWF4LWlzLXNlZW4t/YXQtYW4tYXBwbGUt/c3RvcmUtb24tamFu/dWFyeS0yLTIwMjEt/aW4tYmVpamluZy1j/aGluYS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9aXlyd0Np/TkJ6UW9jZzdUTHEt/LTNpNGM5dXpiTkda/NHprOW4tdUwwRWtk/Zz0",
    "rating": 4.1
  },
  {
    "id": 4,
    "title": "Samsung Galaxy S21 Ultra",
    "price": 1199,
    "image": "https://imgs.search.brave.com/aFr-RPIuuM-l0wLXB_kUdLQR5tS6AaGQpu1bI6T2FpY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mZG4u/Z3NtYXJlbmEuY29t/L2ltZ3Jvb3QvcmV2/aWV3cy8yMS9zYW1z/dW5nLWdhbGF4eS1z/MjEtdWx0cmEvbGlm/ZXN0eWxlLy0xMDI0/dzIvZ3NtYXJlbmFf/MDQxLmpwZw",
    "rating": 2.9
  },
  {
    "id": 5,
    "title": "Logitech Wireless Mouse MX Master 3",
    "price": 99,
    "image": "https://imgs.search.brave.com/wuOar4hA04t1lRlmGtbVDx6jbEWElWk067YU8UA41Bs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9yZXNv/dXJjZS5sb2dpdGVj/aC5jb20vd18xMjA2/LGNfbGltaXQscV9h/dXRvLGZfYXV0byxk/cHJfMS4wL2RfdHJh/bnNwYXJlbnQuZ2lm/L2NvbnRlbnQvZGFt/L2xvZ2l0ZWNoL2Vu/L3Byb2R1Y3RzL21p/Y2UvbXgtbWFzdGVy/LTNzLWJ1c2luZXNz/LXdpcmVsZXNzLW1v/dXNlL2J1eS9teC1t/YXN0ZXItM3MtYnVz/aW5lc3MtcHJvZHVj/dC1jYWxsb3V0LnBu/Zz92PTE",
    "rating": 4.7
  },
  {
    "id": 6,
    "title": "Sony WH-1000XM5 Headphones",
    "price": 299,
    "image": "https://imgs.search.brave.com/6djmQdGJwPS51O_GkhVDyq4C_2de28Hj18SaA6Vs23M/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9pLmVi/YXlpbWcuY29tL2lt/YWdlcy9nLzU1OEFB/ZVN3R3gxb3BnN2kv/cy1sMjI1LmpwZw",
    "rating": 3.2
  },
  {
    "id": 7,
    "title": "Apple MacBook Air M2",
    "price": 1099,
    "image": "https://imgs.search.brave.com/0a9e-S6fORQRYipKfy0-7Dkrto0rOSwbliuKnOBj9Dk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzUwLzczLzYx/LzM2MF9GXzU1MDcz/NjE1M182dEdNTXBk/UGJ4a3c0cHVDMmlj/YWg0UmpYUlZWaFJE/cC5qcGc",
    "rating": 4.5
  },
  {
    "id": 8,
    "title": "Samsung 32 Odyssey Monitor",
    "price": 399,
    "image": "https://imgs.search.brave.com/YGk8v38fJOwoP1aA5ztP11z66EsG65vq1lvunbzx8Jo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFldUNmMFF5Z1Mu/anBn",
    "rating": 2.5
  },
  {
    "id": 9,
    "title": "Dell Inspiron 15",
    "price": 649,
    "image": "https://imgs.search.brave.com/RTjFSyOEdTNhjC-ro7uSskBODtz9R6vwBPyOzopFJ8M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kcm9w/Lm5kdHYuY29tL2Fs/YnVtcy9HQURHRVRT/L2RlbGxfaW5zcGly/b25fMTVfNzAwMF9z/ZXJpZXMvZGVsbF9p/bnNwaXJvbl8xNV83/MDAwX3Nlcmllc19h/bmdsZV9uZHR2Lmpw/Zz9kb3duc2l6ZT05/NTA6Kg",
    "rating": 4.1
  },
  {
    "id": 10,
    "title": "Canon EOS M50 Mark II",
    "price": 599,
    "image": "https://imgs.search.brave.com/6BYMdaErTYAvsvws6sq9r_RZimfidG6_yui3uoWbB3U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ub2Ft/a3JvbGwud3Blbmdp/bmVwb3dlcmVkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wNS9DYW5vbi1F/T1MtTTUwLU1hcmst/TUstSUktNEstQ2lu/ZW1hLUNhbWVyYS1G/b3ItRmlsbW1ha2lu/Zy1DaW5lbWF0b2dy/YXBoeS1WaWRlby1Q/cm9kdWN0aW9uLUZ1/bGwtUmV2aWV3LVdp/dGgtRnJlZS1MVVQt/MTQtNTUtTGVucy0x/MDI0eDY4My5qcGc",
    "rating": 3.8
  }
  ,
  {
    "id": 11,
    "title": "Apple iPhone 16 Pro Max",
    "price": 1399,
    "image": "https://imgs.search.brave.com/CrQc-tMTBt2h5pmAoPlcY8G1-JQejDWUVT9cHIMrQgo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mZG4u/Z3NtYXJlbmEuY29t/L2ltZ3Jvb3QvcmV2/aWV3cy8yNC9hcHBs/ZS1pcGhvbmUtMTYt/cHJvL2xpZmVzdHls/ZS8tMTAyNHcyL2dz/bWFyZW5hXzAzMy5q/cGc",
    "rating": 4.7
  },
  {
    "id": 12,
    "title": "Samsung Galaxy S25 Ultra",
    "price": 1299,
    "image": "https://imgs.search.brave.com/mClL_rCXs2GONIZ77RLrmAn1rYRZCrmu8-ZSNf-RJDk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hbWF0/ZXVycGhvdG9ncmFw/aGVyLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvNy8y/MDI1LzAyL1NhbXN1/bmdfR2FsYXh5X1My/NVVsdHJhX0FteURh/dmllc19Qcm9kdWN0/XzAxLmpwZz93PTEw/MjQ",
    "rating": 4.2
  },
  {
    "id": 13,
    "title": "Google Pixel 10 XL",
    "price": 999,
    "image": "https://imgs.search.brave.com/u9YHqIaaaHO6ehE5nQ7RmCw3VWBhcYS39J51f_rqZe4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZGlnaXRhbHRyZW5k/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjUvMDgvR29v/Z2xlLVBpeGVsLTEw/LVByby1KYWRlLWhh/bmRzLW9uLTkuanBn/P3c9NzIwJnA9MQ",
    "rating": 3.95
  },
  {
    "id": 14,
    "title": "OnePlus 13",
    "price": 849,
    "image": "https://imgs.search.brave.com/_KXBINawwHbS9hnSZl3qmiFtHVE1ryL-Poc2YpNd85A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mZG4u/Z3NtYXJlbmEuY29t/L2ltZ3Jvb3QvcmV2/aWV3cy8yNS9vbmVw/bHVzLTEzL3JldjA3/L2xpZmVzdHlsZS8t/MTAyNHcyL2dzbWFy/ZW5hXzAxNy5qcGc",
    "rating": 3.8
  },
  {
    "id": 15,
    "title": "Nintendo Switch 2",
    "price": 399,
    "image": "https://imgs.search.brave.com/pviJ7HB1ntoC5Jd2chrMZvUJXSbmlMExUO-1YMbI8Pg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE3/NDkyNjQyOTI1ODgt/ODJmMDVkYzgzMGMw/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjEuMCZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1UaDhmRzVw/Ym5SbGJtUnZKVEl3/YzNkcGRHTm9KVEl3/TW54bGJud3dmSHd3/Zkh4OE1BPT0",
    "rating": 4.6
  },
  {
    "id": 16,
    "title": "Sony WF-1000XM5 Earbuds",
    "price": 250,
    "image": "https://imgs.search.brave.com/wpO4w5Ld6PcrJHZVNad_7cSsA5GoEkp60evdhbL_JmE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzAx/NTMvODg2My9maWxl/cy9IZWFkcGhvbmUt/Wm9uZS1Tb255LVdG/LTEwMDBYTTUtT21l/Z2EtMDYuanBnP3Y9/MTY5NTc5NTkxNA",
    "rating": 4.4
  },
  {
    "id": 17,
    "title": "Fitbit Sense 3",
    "price": 299,
    "image": "https://imgs.search.brave.com/EN13qA02qeONtexhpN4PRawZJgJPsxnGeq8OHF7bInE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L2tC/V0RGVXFLWHRvdFVC/WE5FRlVUS2ouanBl/Zw",
    "rating": 3.6
  },
  {
    "id": 18,
    "title": "Tesla Wall Connector EV Charger",
    "price": 499,
    "image": "https://imgs.search.brave.com/IlPSeGcvi_JUXHvdzT2bLnKKrqx-PT3oyfVLVbwFDbM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9vcmth/LmNhL2Nkbi9zaG9w/L2ZpbGVzL1VuaXZl/cnNhbFdhbGxDb25u/ZWN0b3JfODZfZDFj/YmY0MzgtNTk3YS00/YzAxLThjOTgtZDJh/ZTczYWUzYWU5Xzk0/Mng3MDAuanBnP3Y9/MTc0NTU5ODExNw",
    "rating": 4.3
  },
  {
    "id": 19,
    "title": "LG OLED 4K Smart TV",
    "price": 1399,
    "image": "https://imgs.search.brave.com/Hjns44btS1bIE8V0lWloVEcIH0nsmAq82FwbP2m_5nQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaG9tZXRoZWF0/ZXJyZXZpZXcuY29t/L2h0ci1zdGF0ZWxl/c3MvMjAyNS8wNy80/YTQ4YzU0NC00YTAz/LTRmMjItOGE2Yy1i/NzE2NDQxMmYwMGYu/anBn",
    "rating": 4.5
  },
  {
    "id": 20,
    "title": "Amazon Echo Dot (6th Gen)",
    "price": 49,
    "image": "https://imgs.search.brave.com/WTenofVjgZ50m8R_LwsSlCPecI3ItipXnr8c4V8MPvk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGFsbGF2/YWdnYXJ3YWwuaW4v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MTEvQW1hem9uLUVj/aG8tRG90LTV0aC1H/ZW4tVGVhcmRvd24t/MDEyLmpwZz9yZXNp/emU9ODQwLDYzMCZz/c2w9MQ",
    "rating": 3.8
  }
])
  return (
     <div>
          <h2 className="text-center text-3xl font-bold mt-5">Products</h2>
         <div className="flex flex-wrap gap-15 justify-around px-10  w-full  my-15">
             {product.map((elem)=><Product elem={elem}/>)}
         </div>
    </div>
  )
}

export default Home