class AddArchivedToSighting < ActiveRecord::Migration[5.2]
  def change
    add_column :sightings, :archived, :boolean, default: false
  end
end
