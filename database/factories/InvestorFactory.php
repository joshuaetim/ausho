<?php

namespace Database\Factories;

use App\Models\Investor;
use Illuminate\Database\Eloquent\Factories\Factory;

class InvestorFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Investor::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $faker = $this->faker;
        $name = $faker->name;
        return [
            'name' => $name,
            'email' => $faker->unique()->safeEmail,
            'address' => $faker->address,
            'phone' => $faker->e164PhoneNumber,
            'secondary_phone' => $faker->e164PhoneNumber,
            'account_name' => $name,
            'bank' => $faker->cityPrefix . ' Bank',
            'account_number' => $faker->isbn10,
        ];
    }
}
