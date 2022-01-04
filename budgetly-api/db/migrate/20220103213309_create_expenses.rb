class CreateExpenses < ActiveRecord::Migration[6.1]
  def change
    create_table :expenses, id: :uuid do |t|
      t.date :date, null: false
      t.string :description, null: true
      t.string :currency, default: 'UYU', null: false
      t.decimal :amount, null: false

      t.timestamps
    end
  end
end

