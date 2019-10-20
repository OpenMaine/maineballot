module Jekyll
  # Tag to generate an index string for a town/county
  #
  #  - A town should match its name or the name of the county it's in.
  #  - A county should match its name or the name of any town in it.
  class CountyTownIndexTag < Liquid::Tag
    def render(context)
      index_str(terms(context))
    end

    private

    def terms(context)
      city?(context) ? city_terms(context) : county_terms(context)
    end

    def city?(context)
      context['local.city']
    end

    def city_terms(context)
      [context['local.county'], context['local.city']]
    end

    def county_terms(context)
      rows_this_county = context['site.data.local'].select do |row|
        row['county'] == context['local.county']
      end

      city_names = rows_this_county.map { |row| row['city'] }.compact

      [context['local.county'], *city_names]
    end

    def index_str(terms)
      terms.map(&:downcase).join(',')
    end
  end
end

Liquid::Template.register_tag('county_town_index', Jekyll::CountyTownIndexTag)
