<?php

namespace App\Imports;

use App\Models\Investor;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Http;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Imports\HeadingRowFormatter;

class InvestorsImport implements ToModel, WithHeadingRow
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        HeadingRowFormatter::default('none');

        /**
         * Send POST requests to the API instead of duplicating create logic
         */

        Http::post('https://aushotestdeploy.herokuapp.com/api/investors', [
            'name' => $row['name'],
            'email' => $row['email'],
            'address' => $row['address'],
            'phone' => $row['phone_number'],
            'account_name' => $row['account_name'],
            'bank' => $row['bank'],
            'account_number' => $row['account_number'],
        ]);

        // $investor = Investor::create([
        //     'name' => $row['name'],
        //     'email' => $row['email'],
        //     'address' => $row['address'],
        //     'phone' => $row['phone_number'],
        //     'account_name' => $row['account_name'],
        //     'bank' => $row['bank'],
        //     'account_number' => $row['account_number'],
        // ]);

        // $slug = Str::slug($investor->name. ' ' .$investor->id, '-');
        // $investor->slug = $slug;
        // $investor->save();

        // return $investor;
    }
}
