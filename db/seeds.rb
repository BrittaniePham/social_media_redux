100.times do
  Post.create(
    author: Faker::HarryPotter.character,
    body: Faker::HarryPotter.quote
  )
end

puts 'seeded'