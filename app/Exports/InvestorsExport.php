<?php

namespace App\Exports;

use App\Models\Investor;
use PhpOffice\PhpSpreadsheet\Shared\Date;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class InvestorsExport implements FromCollection, WithMapping, WithHeadings, ShouldAutoSize, WithStyles
{

    public function map($investor): array
    {
        return [
            $investor->id,
            $investor->name,
            $investor->email,
            $investor->address,
            $investor->phone,
            $investor->account_name,
            $investor->account_number,
            $investor->bank,
            $investor->created_at->format("F j, Y g:i a"),
        ];
    }

    public function headings(): array
    {
        return [
            "#",
            "Name",
            "Email",
            "Address",
            "Phone Number",
            "Account Name",
            "Account Number",
            "Bank",
            "Registered Date",
        ];
    }

    public function styles(Worksheet $sheet)
    {
        return [
            1 => ['font' => ['bold' => true]],
        ];
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Investor::all();
    }
}
