import { TutorialTopic } from './cssTutorialsData';

export const QUESTDB_TOPICS: TutorialTopic[] = [
  {
    id: 'questdb-intro',
    title: 'QuestDB Introduction',
    description: 'Learn QuestDB, an open-source, high-performance time-series database optimized for SQL analytics.',
    explanation: [
      'QuestDB is designed specifically to ingest and query billions of time-series records extremely fast.',
      'It supports standard relational SQL queries alongside powerful time-series custom extension functions.',
      'It is widely used in financial trading systems, IoT telemetries, application monitoring, and clickstream tracking.'
    ],
    code: `-- Query raw metrics ordered by timestamp
SELECT timestamp, temp, cpu_usage 
FROM sensors 
ORDER BY timestamp DESC 
LIMIT 5;`,
    languageId: 'postgresql'
  },
  {
    id: 'questdb-architecture',
    title: 'QuestDB Architecture',
    description: 'Understanding the columnar storage engine and partition schemes in QuestDB.',
    explanation: [
      'QuestDB uses a columnar storage layout, meaning it only reads the columns requested by a query (saving disk I/O).',
      'Tables are automatically partitioned by time intervals (e.g. DAY, MONTH, YEAR) for high speed queries.',
      'Data is written sequentially on disk, optimizing memory and matching CPU cache layers.'
    ],
    code: `-- Create a partitioned time-series table
CREATE TABLE trades (
  symbol SYMBOL,
  price DOUBLE,
  amount INT,
  timestamp TIMESTAMP
) timestamp(timestamp) PARTITION BY DAY;`,
    languageId: 'postgresql'
  },
  {
    id: 'questdb-ingesting',
    title: 'QuestDB Ingesting Data (ILP)',
    description: 'Ingesting millions of rows per second using the InfluxDB Line Protocol (ILP) and HTTP.',
    explanation: [
      'InfluxDB Line Protocol (ILP) is the primary high-speed ingestion mechanism in QuestDB.',
      'ILP is a lightweight, line-based text protocol parsed over TCP or UDP connections.',
      'This lets QuestDB ingest millions of sensor metrics per second without heavy CPU overhead.'
    ],
    code: `# InfluxDB Line Protocol ingestion format example
# table_name,tag_key=tag_val field_key=field_val timestamp
sensors,device_id=sensor_1 temp=22.5,cpu_usage=14.2 1625097600000000`,
    languageId: 'postgresql'
  },
  {
    id: 'questdb-extensions',
    title: 'QuestDB SQL Extensions',
    description: 'Writing concise queries using time-specific keywords and intervals.',
    explanation: [
      'QuestDB extends standard SQL to simplify querying time-series records without verbose WHERE clauses.',
      'Use the WHERE timestamp = \'interval\' syntax to target specific dates or time windows.',
      'For example, WHERE timestamp = \'2026-06-25\' filters specifically for records on that calendar day.'
    ],
    code: `-- Fetch metrics from the last 15 minutes
SELECT * FROM sensors 
WHERE timestamp IN '2026-06-25T12:00:00.000000Z;15m';`,
    languageId: 'postgresql'
  },
  {
    id: 'questdb-sample-by',
    title: 'QuestDB SAMPLE BY (Time Bucketing)',
    description: 'Aggregating sensor values into custom time buckets (hours, days, minutes) using SAMPLE BY.',
    explanation: [
      'The SAMPLE BY clause groups time-series records into equal-width time intervals.',
      'For example, SAMPLE BY 1h groups and averages values into 1-hour intervals.',
      'This is the primary tool used to generate historical trend lines on visual UI dashboards.'
    ],
    code: `-- Calculate hourly temperature averages
SELECT timestamp, avg(temp) 
FROM sensors
SAMPLE BY 1h;`,
    languageId: 'postgresql'
  },
  {
    id: 'questdb-latest-by',
    title: 'QuestDB LATEST BY (Latest Records)',
    description: 'Retrieving the most recent metric state for specific entities using LATEST BY.',
    explanation: [
      'The LATEST BY clause instantly retrieves the most recent record for a unique identifier (like device ID).',
      'It is highly optimized, skipping historic partitions to only read the latest written state.',
      'Essential for displaying active real-time statuses on live system lists.'
    ],
    code: `-- Get the latest temp reading for each sensor device
SELECT device_id, temp, timestamp 
FROM sensors
LATEST BY device_id;`,
    languageId: 'postgresql'
  },
  {
    id: 'questdb-asof-join',
    title: 'QuestDB Time Joins (ASOF Join)',
    description: 'Joining tables on timestamps that do not match exactly using the ASOF JOIN.',
    explanation: [
      'Traditional JOINs require exact matches. In time-series, sensor logs are written at offset intervals.',
      'ASOF JOIN aligns records from two tables, matching rows where timestamps are nearest to each other.',
      'Commonly used in financial trading to align stock trades with the most recent price quotes.'
    ],
    code: `-- Align trades with market prices nearest in time
SELECT trades.timestamp, trades.symbol, price, amount
FROM trades
ASOF JOIN prices;`,
    languageId: 'postgresql'
  },
  {
    id: 'questdb-table-mgmt',
    title: 'QuestDB Table Management',
    description: 'Adding columns, modifying retention windows, and deleting tables.',
    explanation: [
      'Use ALTER TABLE to append new columns dynamically to active partitioned tables.',
      'You can drop older partitions (e.g., to clear disk space) without deleting the table schema itself.',
      'This ensures high performance and consistent storage cleanup on high-volume sensory streams.'
    ],
    code: `-- Add a new column to sensors table
ALTER TABLE sensors ADD COLUMN battery_level INT;

-- Drop an old day partition to save disk space
ALTER TABLE sensors DROP PARTITION LIST '2026-06-01';`,
    languageId: 'postgresql'
  }
];
