require "application_system_test_case"

class SightingsTest < ApplicationSystemTestCase
  setup do
    @sighting = sightings(:one)
  end

  test "visiting the index" do
    visit sightings_url
    assert_selector "h1", text: "Sightings"
  end

  test "creating a Sighting" do
    visit sightings_url
    click_on "New Sighting"

    fill_in "Animal", with: @sighting.animal_id
    fill_in "Latitude", with: @sighting.latitude
    fill_in "Longitude", with: @sighting.longitude
    fill_in "Notes", with: @sighting.notes
    click_on "Create Sighting"

    assert_text "Sighting was successfully created"
    click_on "Back"
  end

  test "updating a Sighting" do
    visit sightings_url
    click_on "Edit", match: :first

    fill_in "Animal", with: @sighting.animal_id
    fill_in "Latitude", with: @sighting.latitude
    fill_in "Longitude", with: @sighting.longitude
    fill_in "Notes", with: @sighting.notes
    click_on "Update Sighting"

    assert_text "Sighting was successfully updated"
    click_on "Back"
  end

  test "destroying a Sighting" do
    visit sightings_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Sighting was successfully destroyed"
  end
end
