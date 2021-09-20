class Animal < ApplicationRecord
  default_scope { where(archived: false) }
end
