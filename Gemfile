source 'https://rubygems.org'

gem 'pg'

# Run-time dependencies
gem 'rails', '3.2.16'
gem 'rails_autolink', '1.1.3'
gem 'nokogiri', '1.5.10'
gem 'columnize', '0.3.6'
gem 'rdoc', '3.12.2', :require => false
gem 'geokit', '1.6.5'
gem 'htmlentities', '4.3.1'
gem 'paper_trail', '2.7.2'
gem 'ri_cal', '0.8.8'
gem 'rubyzip', '0.9.9', :require =>  'zip/zip'
gem 'will_paginate', '3.0.5'
gem 'httparty', '0.11.0'
gem 'multi_json' # Use whichever version 'httparty' wants, needed for our specs
gem 'loofah', '1.2.1'
# NOTE: 'loofah-activerecord' doesn't support Rails 3.2, so use my fork:
gem 'loofah-activerecord', :git => 'git://github.com/igal/loofah-activerecord.git', :branch => 'with_rails_3.1_and_3.2'
gem 'bluecloth', '2.2.0'
gem 'formtastic', '2.2.1'
# validation_reflection 1.0.0 doesn't support Rails 3.2, so use unofficial patches:
#gem 'validation_reflection', :git => 'git://github.com/ncri/validation_reflection.git', :ref => '60320e6beb088808fd625a8d958dbd0d2661d494'
gem 'acts-as-taggable-on', '2.4.1'
gem 'jquery-rails', '1.0.19'
gem 'progress_bar', '1.0.0'
gem 'exception_notification', '2.6.1'
gem 'font-awesome-rails', '3.2.1.3'
gem 'rails_12factor'

ruby '1.9.3'

# gem 'paper_trail_manager', :git => 'https://github.com/igal/paper_trail_manager.git'
# gem 'paper_trail_manager', :path => '../paper_trail_manager'
gem 'paper_trail_manager', '>= 0.2.0'

platform :jruby do
  gem 'activerecord-jdbc-adapter'
  gem 'jruby-openssl'
  gem 'jruby-rack'
  gem 'warbler'

  gem 'activerecord-jdbcsqlite3-adapter'
  gem 'jdbc-sqlite3'
end

platform :rbx do
  gem "rubysl"
  gem "rubysl-test-unit", :require => false
  gem "racc"
end

# Some dependencies are only needed for test and development environments. On
# production servers, you can skip their installation by running:
#   bundle install --without development:test
group :development, :test do
  gem 'rspec-rails', '2.11.0'
  gem 'webrat', '0.7.3'
  gem 'factory_girl_rails', '1.7.0' # 2.0 and above don't support Ruby 1.8.7 :(
  gem 'spork', '~> 0.9.2'
  gem 'database_cleaner', '~> 0.8.0'

  gem 'capistrano', '2.12.0'
  gem 'capistrano-ext', '1.2.1'

  # Guard and plugins
  platforms :ruby_19, :ruby_20 do
    gem 'guard', '~> 1.3.0'
    gem 'guard-rspec', '~> 1.2.1'
    gem 'guard-spork', '~> 1.1.0'
  end
end

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  # gem 'coffee-rails', '~> 3.2.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  gem 'therubyracer', :platforms => :ruby

  # Minify assets.  Requires a javascript runtime, such as 'therubyracer'
  # above. You will also need to set 'config.assets.compress' to true in
  # config/environments/production.rb
  gem 'uglifier', '>= 1.0.3'
end

