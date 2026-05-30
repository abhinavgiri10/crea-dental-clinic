// Temporary in-memory storage - Replace with actual database
let appointments = [];

export async function POST(request) {
  try {
    const body = await request.json();

    // Validation
    if (!body.name || !body.phone || !body.service || !body.date || !body.time) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400 }
      );
    }

    // Create appointment object
    const appointment = {
      id: Date.now().toString(),
      ...body,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    // Store appointment (in production, save to database)
    appointments.push(appointment);

    // TODO: Send confirmation email to patient
    console.log('Appointment booked:', appointment);

    // TODO: Send notification email to clinic
    console.log('Clinic notification:', appointment);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Appointment request submitted successfully',
        appointment,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error('API Error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500 }
    );
  }
}

export async function GET() {
  return new Response(
    JSON.stringify({
      total: appointments.length,
      appointments,
    }),
    { status: 200 }
  );
}
