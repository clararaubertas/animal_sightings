class AddArchived < ActiveRecord::Migration[5.2]
  def change
    add_column :animals, :archived, :boolean, default: false
  end
end
