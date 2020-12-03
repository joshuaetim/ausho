<?php

namespace App\Imports;

use App\Models\Investor;
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

        return new Investor([
            'name' => $row['name'],
            'email' => $row['email'],
            'address' => $row['address'],
            'phone' => $row['phone_number'],
            'account_name' => $row['account_name'],
            'bank' => $row['bank'],
            'account_number' => $row['account_number'],
        ]);
    }
}
