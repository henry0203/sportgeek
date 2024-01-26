require 'date'

# DataPoint.where(user_id: 1).destroy_all
# DataPoint.where(user_id: 2).destroy_all

Tier.destroy_all
Goal.destroy_all


Goal.create!(description: "Walk 3km", target_key: "distance", target_value: 3, rank: 1, goal_type: "day", user_id: User.first.id)
Goal.create!(description: "Walk 8 floors", target_key: "floors", target_value: 8, rank: 1, goal_type: "day", user_id: User.first.id)
Goal.create!(description: "Be very active for about 1h", target_key: "minutesVeryActive", target_value: 60, rank: 1, goal_type: "day", user_id: User.first.id)
Goal.create!(description: "Sleep at least 7hours", target_key: "minutesSedentary", target_value: 420, rank: 1, goal_type: "day", user_id: User.first.id)
Goal.create!(description: "Burn as much calories as I ate", target_key: "calories", target_value: 1900, rank: 1, goal_type: "day", user_id: User.first.id)
Goal.create!(description: "Walk as much as possible", target_key: "steps", target_value: 6000, rank: 1, goal_type: "day", user_id: User.first.id)
Goal.create!(description: "Burn 800 calories during a sport session", target_key: "activityCalories", target_value: 800, rank: 1, goal_type: "day", user_id: User.first.id)
Goal.create!(description: "Do an intense sport session of 40min", target_key: "minutesVeryActive", target_value: 40, rank: 1, goal_type: "day", user_id: User.first.id)
