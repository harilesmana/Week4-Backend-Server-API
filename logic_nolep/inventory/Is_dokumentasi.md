# Inventory System API Documentation

## Deskripsi
API Inventory System adalah sebuah sistem yang memungkinkan pengguna untuk mengelola pengguna, kategori, produk, pesanan, dan item pesanan. API ini mendukung operasi CRUD (Create, Read, Update, Delete) dan menggunakan otentikasi JWT untuk melindungi endpoint yang sensitif.

---

## Daftar Endpoint

### Auth
- [Registrasi Pengguna Baru](#registrasi-pengguna-baru)
- [Login Pengguna](#login-pengguna)

### Pengguna
- [Mendapatkan Semua Pengguna](#mendapatkan-semua-pengguna)
- [Mendapatkan Pengguna Berdasarkan ID](#mendapatkan-pengguna-berdasarkan-id)
- [Memperbarui Pengguna](#memperbarui-pengguna)
- [Menghapus Pengguna](#menghapus-pengguna)

### Kategori
- [Membuat Kategori Baru](#membuat-kategori-baru)
- [Mendapatkan Semua Kategori](#mendapatkan-semua-kategori)
- [Mendapatkan Kategori Berdasarkan ID](#mendapatkan-kategori-berdasarkan-id)
- [Memperbarui Kategori](#memperbarui-kategori)
- [Menghapus Kategori](#menghapus-kategori)

### Produk
- [Membuat Produk Baru](#membuat-produk-baru)
- [Mendapatkan Semua Produk](#mendapatkan-semua-produk)
- [Mendapatkan Produk Berdasarkan ID](#mendapatkan-produk-berdasarkan-id)
- [Memperbarui Produk](#memperbarui-produk)
- [Menghapus Produk](#menghapus-produk)

### Pesanan
- [Membuat Order Baru](#membuat-order-baru)
- [Mendapatkan Semua Pesanan](#mendapatkan-semua-pesanan)
- [Mendapatkan Order Berdasarkan ID](#mendapatkan-order-berdasarkan-id)
- [Memperbarui Order](#memperbarui-order)
- [Menghapus Order](#menghapus-order)

### Item Pesanan
- [Membuat Item Pesanan Baru](#membuat-item-pesanan-baru)

---

## Auth

### Registrasi Pengguna Baru
**Endpoint**: `POST /api/auth/register`

**Input**:
```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```
