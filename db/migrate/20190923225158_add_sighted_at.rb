class AddSightedAt < ActiveRecord::Migration[5.2]
  def change
    add_column :sightings, :sighted_at, :datetime
  end
end
