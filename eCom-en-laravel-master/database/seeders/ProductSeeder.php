<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('products')->insert([
            [
                'name'=>'Oppo mobile',
                "price"=>"30000 Rs",
                "description"=>"A smartphone with 8gb ram and much more feature",
                "category"=>"mobile",
                "gallery"=>"https://5.imimg.com/data5/SELLER/Default/2020/12/WI/VR/VK/118676901/oppo-f17-pro-mobile-500x500.jpg"
            ],
            [
                'name'=>'Panasonic Tv',
                "price"=>"40000 RS",
                "description"=>"A smart tv with much more feature",
                "category"=>"tv",
                "gallery"=>"https://m.media-amazon.com/images/I/41WE9ZGEC4L._SX300_SY300_QL70_FMwebp_.jpg"
            ],
            [
                'name'=>'Soni Tv',
                "price"=>"50000 Rs",
                "description"=>"A tv with much more feature",
                "category"=>"tv",
                "gallery"=>"https://4.imimg.com/data4/PM/KH/MY-34794816/lcd-500x500.png"
            ],
            [
                'name'=>'LG fridge',
                "price"=>"20000 Rs",
                "description"=>"A fridge with much more feature",
                "category"=>"fridge",
                "gallery"=>"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFx-2-wTOcfr5at01ojZWduXEm5cZ-sRYPJA&usqp=CAU"
             ]
        ]);
    }
}
