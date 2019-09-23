class AddPictureToSightings < ActiveRecord::Migration[5.2]
  def change
    add_column :sightings, :picture, :string
  end
end
