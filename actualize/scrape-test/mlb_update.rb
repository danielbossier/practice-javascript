require "nokogiri"
require "httparty"
require "byebug"

def display
  url = "https://www.espn.com/mlb/standings"
  unparsed_page = HTTParty.get(url)
  parsed_page = Nokogiri::HTML(unparsed_page)
  al_teams = []
  nl_teams = []
  mlb_teams = []
  al_index = 5
  nl_index = 74
  al_wl_index = 0
  nl_wl_index = 180
  team_index = 1
  team_listings = parsed_page.css("div.tabs__content")

  5.times do
    a_team = {
      name: team_listings.css("a.AnchorLink")[al_index].text,
      wins: team_listings.css("span.stat-cell")[al_wl_index].text,
      losses: team_listings.css("span.stat-cell")[al_wl_index + 1].text,
    }

    teams = Team.find(1..5)

    team = teams[team_index]
    team.name = a_team[:name] || team.name
    team.wins = a_team[:wins] || team.wins
    team.losses = a_team[:losses] || team.losses
    team.save
    al_teams << a_team
    al_index += 3

    al_wl_index += 12
    team_index += 1
  end
end

display
