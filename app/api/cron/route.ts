// app/api/cron/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { main } from '../../../cron/test-cron';

export async function GET(req: NextRequest) {
    try {
        main();
        return NextResponse.json({ message: 'Cron job started' }, { status: 200 });
    } catch (error) {
        console.error('Error starting cron job:', error);
        return NextResponse.json({ error: 'Failed to start cron job' }, { status: 500 });
    }
}
