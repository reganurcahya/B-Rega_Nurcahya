/* function setTime() {
    const header = document.getElementById("header");
    header.textContent = new Date().toString();
  }
  setInterval(setTime, 1000);
  console.log("Program Finish"); */

  // Fungsi pembagian dengan validasi
 function divideNumbers(a, b) {
    try {
      // Memeriksa apakah a dan b adalah angka
      if (isNaN(a) || isNaN(b)) {
        throw new Error("Input harus berupa angka.");
      }
      
      // Mengonversi input ke angka
      a = Number(a);
      b = Number(b);
      
      // Memeriksa apakah b adalah nol
      if (b === 0) {
        throw new Error("Pembagian dengan nol tidak diizinkan.");
      }
      
      // Melakukan pembagian jika semua validasi lolos
      const result = a / b;
      return result;

    } catch (error) {
      // Mengembalikan pesan kesalahan
      return error.message;
    }
  }

  // Fungsi untuk mengambil input dan menampilkan hasil
  function calculateDivision() {
    // Mengambil nilai input dari pengguna
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    // Memanggil fungsi pembagian
    const result = divideNumbers(num1, num2);
    
    // Menampilkan hasil atau pesan kesalahan di elemen <p> dengan id "result"
    document.getElementById("result").textContent = result;
} 