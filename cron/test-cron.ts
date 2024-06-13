import schedule from 'node-schedule';

export async function main() {
    schedule.scheduleJob('* * * * * *', function() {
        console.log('The answer to life, the universe, and everything!');
    });

    console.info('Cron job started');
}

if (require.main === module) {
    main();
}