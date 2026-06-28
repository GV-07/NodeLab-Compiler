import { TutorialTopic } from './cssTutorialsData';

export const REDIS_TOPICS: TutorialTopic[] = [
  {
    id: 'redis-intro',
    title: 'Redis Intro',
    description: 'Learn Redis, an open-source, in-memory data structure store used as a database, cache, message broker, and streaming engine.',
    explanation: [
      'Redis (Remote Dictionary Server) stores data directly in RAM, achieving sub-millisecond execution speeds.',
      'It supports key-value maps where values can be complex structures like Lists, Sets, Hashes, and Sorted Sets.',
      'It is widely used to cache database results, coordinate user sessions, and power real-time pub/sub channels.'
    ],
    code: `# Simple Redis key-value operation example
SET user:session:101 "active"
GET user:session:101`,
    languageId: 'javascript_prog'
  },
  {
    id: 'redis-install-cli',
    title: 'Redis Installation & CLI',
    description: 'Installing Redis and interacting with the command-line interface using redis-cli.',
    explanation: [
      'Install Redis on Linux using apt install redis-server, or via Homebrew on macOS.',
      'Use the redis-cli command in your terminal to open an interactive command prompt.',
      'Test server connectivity by typing PING, which should return the response PONG.'
    ],
    code: `# Command prompt instructions
redis-server --version
redis-cli
127.0.0.1:6379> PING
PONG`,
    languageId: 'javascript_prog'
  },
  {
    id: 'redis-strings',
    title: 'Redis Strings (GET/SET)',
    description: 'Managing simple key-value string records, counters, and multipliers.',
    explanation: [
      'Strings are the most fundamental Redis data type, capable of holding text, serialized objects, or binary files.',
      'Use SET key value to write a key, and GET key to retrieve its contents.',
      'Use INCR key or DECR key to increment or decrement integer string values atomically.'
    ],
    code: `# Incrementing key value counters
SET visitor_count 10
INCR visitor_count # Increments visitor_count to 11
GET visitor_count`,
    languageId: 'javascript_prog'
  },
  {
    id: 'redis-lists',
    title: 'Redis Lists (LPUSH/RPUSH)',
    description: 'Adding, popping, and slicing values in indexed lists using LPUSH, RPUSH, and LRANGE.',
    explanation: [
      'Redis Lists are ordered stacks of strings mapped as linked lists.',
      'Use LPUSH key value to prepend a value to the left (head), and RPUSH key value to append to the right (tail).',
      'Use LRANGE key start stop to retrieve slices of lists based on index boundaries.'
    ],
    code: `# Queue management using Lists
RPUSH tasks "clean_logs"
RPUSH tasks "send_emails"
LRANGE tasks 0 -1 # Returns all items inside tasks list`,
    languageId: 'javascript_prog'
  },
  {
    id: 'redis-sets',
    title: 'Redis Sets (SADD/SMEMBERS)',
    description: 'Storing sets of unique elements, performing counts, and testing set membership.',
    explanation: [
      'Sets are unordered collections of unique strings. Duplicate items are ignored automatically.',
      'Use SADD key member to insert elements, and SISMEMBER key member to check if an item exists.',
      'Sets support operations like intersections (SINTER) and unions (SUNION) to compare groups.'
    ],
    code: `# Categorizing user permissions using Sets
SADD user_roles "admin"
SADD user_roles "editor"
SMEMBERS user_roles # Returns unique list of roles`,
    languageId: 'javascript_prog'
  },
  {
    id: 'redis-hashes',
    title: 'Redis Hashes (HSET/HGET)',
    description: 'Storing structured objects and dictionaries inside Hash maps.',
    explanation: [
      'Hashes represent field-value maps, identical to standard Python dictionaries or JS objects.',
      'Use HSET key field value to write a specific parameter, and HGET key field to read it.',
      'Hashes are the most memory-efficient data type to represent complex objects inside Redis.'
    ],
    code: `# Saving a user profile object
HSET user:1001 name "Bob" age "30" role "manager"
HGET user:1001 name # Returns "Bob"
HGETALL user:1001 # Returns all fields and values`,
    languageId: 'javascript_prog'
  },
  {
    id: 'redis-sorted-sets',
    title: 'Redis Sorted Sets (ZADD)',
    description: 'Managing prioritized lists and leaderboards using scored sorted sets.',
    explanation: [
      'Sorted Sets (ZSET) are sets of unique strings where every member is associated with a floating-point score.',
      'Elements are automatically kept sorted according to their scores.',
      'Use ZADD key score member to write values, and ZRANGE key start stop WITHSCORES to fetch sorted lists.'
    ],
    code: `# Gaming leaderboard scoring
ZADD highscores 1200 "alice_99"
ZADD highscores 1500 "bob_pro"
ZREVRANGE highscores 0 1 WITHSCORES # Returns players sorted high-to-low`,
    languageId: 'javascript_prog'
  },
  {
    id: 'redis-pubsub',
    title: 'Redis Publish/Subscribe (Pub/Sub)',
    description: 'Implementing real-time message broadcasting networks using PUBLISH and SUBSCRIBE.',
    explanation: [
      'Pub/Sub decouples publishers (who send messages) from subscribers (who listen to channels).',
      'Use SUBSCRIBE channel_name to start listening to broadcasts.',
      'Use PUBLISH channel_name "message" to instantly broadcast messages to all connected subscribers.'
    ],
    code: `# Event broadcasting
SUBSCRIBE alerts_channel

# Transmitted from separate client:
PUBLISH alerts_channel "System memory usage is high!"`,
    languageId: 'javascript_prog'
  },
  {
    id: 'redis-persistence',
    title: 'Redis Persistence (RDB/AOF)',
    description: 'Understanding memory persistence schemes like RDB snapshots and AOF logs.',
    explanation: [
      'Since Redis runs in RAM, values are lost on server crash unless persistence is configured.',
      'RDB (Redis Database) takes point-in-time snapshots of your dataset at specified intervals.',
      'AOF (Append Only File) logs every write operation received by the server, replaying logs on reboot.'
    ],
    code: `# Trigger a manual synchronous database snapshot save to disk
SAVE

# Or background asynchronous save
BGSAVE`,
    languageId: 'javascript_prog'
  },
  {
    id: 'redis-expiration',
    title: 'Redis Expiration & TTL',
    description: 'Setting key life windows and monitoring Time-to-Live limits using EXPIRE and TTL.',
    explanation: [
      'You can configure keys to delete themselves automatically using expiration rules.',
      'Use EXPIRE key seconds to set a timeout limit on an active key.',
      'Use TTL key to monitor how many seconds remain before the key is deleted.'
    ],
    code: `# Setting key to expire in 60 seconds
SET temp_token "X928J"
EXPIRE temp_token 60
TTL temp_token # Returns remaining seconds`,
    languageId: 'javascript_prog'
  }
];
