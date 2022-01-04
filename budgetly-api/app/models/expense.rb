class Expense < ApplicationRecord
  AVAILABLE_CURRENCIES = %w[UYU USD].freeze
  validates_inclusion_of :currency, in: AVAILABLE_CURRENCIES
end
